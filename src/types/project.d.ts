import Vue from "vue";
import { NewStore } from "../store/types";

declare module "vue/types/vue" {
  interface Vue {
    $store: NewStore;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: NewStore;
  }
}
