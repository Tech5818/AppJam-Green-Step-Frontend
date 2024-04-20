import { create } from "zustand";

export interface ICurrentUrl {
  currentUrl: string;
  setCurrentUrl: (newCurrentUrl: string) => void;
}

export const useCurrentUrl = create<ICurrentUrl>((set) => ({
  currentUrl: "/",
  setCurrentUrl: (newCurrentUrl: string) => {
    set((state) => {
      if (state.currentUrl !== newCurrentUrl) {
        return { currentUrl: newCurrentUrl };
      }
      return state;
    });
  },
}));
