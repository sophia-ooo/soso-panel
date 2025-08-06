import { register } from "../registry.js";

export const DisplayControl = ({ nodes, treeNode, update }) => {
  const node = nodes[treeNode.id];
  switch (node.format) {
    case "monospace":
      return <span className="display monospace">{node.value}</span>;
    case "block":
      return <pre className="display monospace">{node.value}</pre>;
    case "html":
      return (
        <span
          className="display"
          dangerouslySetInnerHTML={{ __html: node.value ?? "" }}
        />
      );
    default:
      return <span className="display">{node.value}</span>;
  }
};

register("display", DisplayControl, {
  value: "",
  format: "text",
});
