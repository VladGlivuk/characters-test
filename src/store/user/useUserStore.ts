import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { UserStore } from "@/core/types/store";

const useUserStore = create<UserStore>()(
  devtools((set) => ({
    user: null,
    setUser: (user) => {
      set({ user });
    },
  }))
);

export default useUserStore;
