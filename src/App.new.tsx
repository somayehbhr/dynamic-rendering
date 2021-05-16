import React from "react";
import "./App.css";
import { DomNode, dslTree } from "./dsl.interface";
import dsl from "./dsl.json";

const dictionary = {
	kiwi(item: DomNode): React.ReactNode {
		return (
			<div key={item.key} className={item.className} style={item.style}>
				{item.children}
			</div>
		);
	},
	carrot(item: DomNode): React.ReactNode {
		return item.textContent;
	},
};
function dynamicRendering(dsl: Array<dslTree>): React.ReactNode {
	return dsl.map(({ type, children, ...elm }) => {
		const cherry = { ...elm } as DomNode;
		if (Array.isArray(children) && children.length) {
			cherry.children = dynamicRendering(children);
		}
		return dictionary[type](cherry);
	});
}

function AppNew() {
	return <>{dynamicRendering(dsl as Array<dslTree>)}</>;
}

export default AppNew;
