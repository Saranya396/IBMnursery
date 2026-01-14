import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
      } else {
        existing.quantity++;
      }

      state.totalQuantity++;
      state.totalAmount += item.price;
    },

    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);

      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter(i => i.id !== id);
    },

    updateQuantity(state, action) {
      const { id, type } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (type === "inc") {
        item.quantity++;
        state.totalQuantity++;
        state.totalAmount += item.price;
      }

      if (type === "dec" && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalAmount -= item.price;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
