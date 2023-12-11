import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const modalStore = (set: any) => ({
  openModal: false,
  toggleModal: (truth: boolean) => {
    // Your authentication logic here
    set({ openModal: truth });
  },
});
export const useModalToggle = create(devtools(modalStore));
