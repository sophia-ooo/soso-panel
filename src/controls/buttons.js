import { register } from "../registry.js";
import { normalizeOptions } from "./util.js";

const ButtonsControl = ({ nodes, treeNode, update }) => {
  const node = nodes[treeNode.id];

  const options = normalizeOptions(node.options).map(({ label, value }, i) => {
    const selectedStyle = node.value === value ? "selected" : "";
    return (
      <button
        onClick={() => update({ [node.id]: { value } })}
        className={`${selectedStyle}`}
        type="button"
        key={label}
      >
        {label}
      </button>
    );
  });

  return <div className="buttons">{options}</div>;
};

register("buttons", ButtonsControl, {
  value: (n) => normalizeOptions(n.options)[0]?.value,
});
