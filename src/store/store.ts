import { create } from "zustand";

interface StoreState {
  cityKey: number;
  setKey: (newKey: number) => void;
}

const useStore = create<StoreState>((set) => ({
  cityKey: 0,
  setKey: (newKey) => set({ cityKey: newKey }),
}));

export default useStore;
