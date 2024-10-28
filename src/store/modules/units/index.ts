import { Module } from "vuex";
import type { IUnitsState } from "@/types/Unit";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import type { RootState } from '@/store/index';

const unitsModule: Module<IUnitsState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default unitsModule;
