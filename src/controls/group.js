import { useState } from "preact/hooks";
import { register } from "../registry.js";
import { Control } from "../control.js";

export const Group = ({ nodes, treeNode, update }) => {
  const node = nodes[treeNode.id];

  const children = treeNode.nodes.map((treeNodeChild, i) => (
    <Control
      key={treeNodeChild.id}
      nodes={nodes}
      treeNode={treeNodeChild}
      update={update}
    />
  ));

  const expandStyle = node.expanded ? "soso-expanded" : "soso-collapsed";
  const labelStyle = node.showLabel ? "soso-show-label" : "soso-hide-label";
  const showLabel = !(node.label === "" || node.label === null); // same as Control

  return (
    <div className={`soso-group ${expandStyle} ${labelStyle}`}>
      {showLabel && (
        <span
          className="soso-label"
          onClick={() => {
            if (node.expandable) {
              update({ [node.id]: { expanded: !node.expanded } });
            }
          }}
        >
          {node.expandable && <span className="soso-icon">&#8963;</span>}
          {node.label ?? node.id}
        </span>
      )}
      <div className="soso-container">{children}</div>
    </div>
  );
};

register("group", Group, {
  layout: "block",
  expandable: true,
  expanded: true,
});
