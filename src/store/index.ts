import { createStore } from "vuex";
import unitsModule from "./modules/units";

export interface RootState {
  [key: string]: unknown;
}

const store = createStore<RootState>({
  modules: {
    units: unitsModule,
  },
});

export default store;
