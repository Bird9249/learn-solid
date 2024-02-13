import { For, Match, Switch } from "solid-js";
import { createStore } from "solid-js/store";

interface Store {
  isLoading: boolean;
  names: string[];
  error?: string;
}

export default () => {
  const [store, setStore] = createStore<Store>({
    names: ["test1", "test2", "test3"],
    isLoading: false,
  });

  return (
    <div>
      <button onClick={() => setStore("isLoading", (prev) => !prev)}>
        loading
      </button>
      <br />
      <button onClick={() => setStore("error", () => "something wrong!")}>
        error
      </button>
      <br />
      <Switch fallback={"no action!"}>
        <Match when={store.isLoading && !store.error}>Loading...</Match>
        <Match when={!store.isLoading && !store.error}>
          <For each={store.names}>
            {(name, idx) => (
              <>
                <span>
                  {name}; index: {idx()}
                </span>
                <br />
              </>
            )}
          </For>
        </Match>
        <Match when={!store.isLoading && store.error}>{store.error}</Match>
      </Switch>
    </div>
  );
};
