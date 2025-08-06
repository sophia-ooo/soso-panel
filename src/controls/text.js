import { register } from "../registry.js";

const TextControl = ({ nodes, treeNode, update }) => {
  const node = nodes[treeNode.id];

  return (
    <input
      type="text"
      value={node.value}
      onInput={(e) => update({ [node.id]: { value: e.currentTarget.value } })}
    />
  );
};

register("text", TextControl, { value: "" });
