import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

interface Store {
  isLoading: boolean;
  data: string;
}

export default () => {
  const [count, setCount] = createSignal<boolean>(false);
  const [store, setStore] = createStore<Store>({
    data: "hello",
    isLoading: false,
  });

  return (
    <div>
      <button
        onClick={() => {
          setStore("isLoading", (prev) => !prev);
        }}
      >
        count
      </button>
      {store.data}
      <br />
      {JSON.stringify(store.isLoading)}
    </div>
  );
};
