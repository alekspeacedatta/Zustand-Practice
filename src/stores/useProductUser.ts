import { create } from "zustand";
import { useProductStore } from "./useProductStore";
import { useUserStore } from "./useUserStore";
import { type ProductStoreType, type UserStoreType } from "../Types/Type";

export const useProductUser = create< UserStoreType & ProductStoreType >((...args) => ({
    ...useProductStore(...args),
    ...useUserStore(...args),
}))