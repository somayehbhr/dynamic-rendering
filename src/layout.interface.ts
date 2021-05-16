import * as CSS from "csstype";

export type ElementsType = "div" | "text";

export interface LayoutTree {
  type: ElementsType;
  style?: CSS.Properties<string | number>;
  className?: string;
  key: string;
  children: Array<LayoutTree>;
  textContent?: string;
}

export interface DomNode extends Omit<LayoutTree, "children"> {
  children: React.ReactNode;
}
