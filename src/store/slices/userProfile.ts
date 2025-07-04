import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { User, UserResponse } from "../types";

const getProfile = (set) => ({
  myProfile: {},
  profileLoading: false,
  profileError: null,
  setProfile: (myProfile: User) => set({ myProfile }, false, "setProfile"),
});

const useStoreProfile = create<UserResponse>()(
  devtools(getProfile, { name: "UserProfileStore" })
);

export default useStoreProfile;
