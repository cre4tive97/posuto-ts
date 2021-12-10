import { RootState } from "./state";
import { Mutations } from "./mutations";
import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Actions } from "./actions";

type NewMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type NewActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export type NewStore = Omit<Store<RootState>, "commit" | "dispatch"> &
  NewMutations &
  NewActions;
