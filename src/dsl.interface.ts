import * as CSS from "csstype";
import { LayoutTree } from "./layout.interface";

export type Element = "kiwi" | "carrot";

export interface dslTree {
	type: Element;
	style?: CSS.Properties<string | number>;
	className?: string;
	key: string;
	children: Array<dslTree>;
	textContent?: string;
}
export interface DomNode extends Omit<LayoutTree, "children"> {
	children: React.ReactNode;
}
