import React, { ReactNode } from "react";
import layout from "./layout.json";
import "./App.css";
import { DomNode, LayoutTree } from "./layout.interface";

const elementsDic = {
  div(properties: DomNode): React.ReactNode {
    return (
      <div
        key={properties.key}
        className={properties.className}
        style={properties.style}
      >
        {properties.children}
      </div>
    );
  },
  text(properties: DomNode): React.ReactNode {
    return properties.textContent;
  },
};

function dynamicRendering(layout: Array<LayoutTree>): React.ReactNode {
  return layout.map(({ type, children, ...element }) => {
    const node = { ...element } as DomNode;

    if (Array.isArray(children) && children.length) {
      node.children = dynamicRendering(children);
    }

    return elementsDic[type](node);
  });
}

function App() {
  console.log(dynamicRendering(layout as Array<LayoutTree>));
  return <>{dynamicRendering(layout as Array<LayoutTree>)}</>;
}

export default App;
