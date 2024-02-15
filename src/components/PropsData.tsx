import { JSXElement, ParentProps } from "solid-js";

export function Parent() {
  return (
    <>
      <h1>parent</h1>
      <br />

      <Children
        title="this is children"
        age={18}
        subtitle={<h2>this is sub title</h2>}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde vel
          recusandae, dolorem magni amet ullam suscipit aut sunt officia!
          Quaerat aliquam beatae minima recusandae ab, dolorem nemo rerum
          accusamus eos!
        </p>
      </Children>
    </>
  );
}

export function Children(
  props: ParentProps<{ title: string; age?: number; subtitle: JSXElement }>
) {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.age}</h3>
      <br />
      {props.subtitle}
      {props.children}
    </>
  );
}
