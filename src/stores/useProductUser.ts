import { create } from "zustand";
import { productSlice } from "./productSlice";
import { userSlice } from "./userSlice";
import { type ProductStoreType, type UserStoreType } from "../Types/Type";

export const useProductUser = create< ProductStoreType & UserStoreType >((...args) => ({
  ...productSlice(...args),
  ...userSlice(...args),
}));