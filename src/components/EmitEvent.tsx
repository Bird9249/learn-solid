import { ParentProps, createSignal } from "solid-js";

export function Parent() {
  const [title, setTitle] = createSignal<string>("Parent");
  const [subtitle, setSubtitle] = createSignal<string>("subtitle");

  return (
    <>
      <h1>{title()}</h1>
      <h2>{subtitle()}</h2>
      <br />
      <Children
        onChildrenClick={() => {
          setTitle("Hello");
        }}
        onClick={(title) => {
          setSubtitle(title);
        }}
      />
    </>
  );
}

export function Children(
  props: ParentProps<{
    onChildrenClick?: () => void;
    onClick: (title: string) => void;
  }>
) {
  return (
    <>
      <button
        onClick={() => {
          if (props.onChildrenClick) {
            props.onChildrenClick();
          }

          props.onClick("emit this event");
        }}
      >
        click
      </button>
    </>
  );
}
