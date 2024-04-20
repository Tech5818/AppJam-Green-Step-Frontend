import { create } from "zustand";

export interface IResult {
  data: string;
  setData: (newData: string) => void;
}

export const useResult = create<IResult>((set) => ({
  data: "",
  setData: (newData: string) => set({ data: newData }),
}));
