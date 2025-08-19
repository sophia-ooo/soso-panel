import { register } from "../registry.js";

export const DisplayControl = ({ nodes, treeNode, update }) => {
  const node = nodes[treeNode.id];
  switch (node.format) {
    case "monospace":
      return <span className="soso-display soso-monospace">{node.value}</span>;
    case "block":
      return <pre className="soso-display soso-monospace">{node.value}</pre>;
    case "html":
      return (
        <span
          className="soso-display"
          dangerouslySetInnerHTML={{ __html: node.value ?? "" }}
        />
      );
    default:
      return <span className="soso-display">{node.value}</span>;
  }
};

register("display", DisplayControl, {
  value: "",
  format: "text",
});
