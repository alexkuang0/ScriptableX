declare type ElementType =
  | "widget"
  | "text"
  | "stack"
  | "spacer"
  | "image"
  | "date";

declare type WidgetSize = "small" | "medium" | "large";
declare type Alignment = "left" | "center" | "right";

declare interface Padding {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

declare interface Shadow {
  color: Color;
  radius: number;
  offset: Point;
}

declare interface Border {
  radius: number;
  width: number;
  color: Color;
}

declare interface Background {
  color: Color;
  image: Image;
  linearGradient: LinearGradient;
}

// <widget />
declare interface WidgetProps {
  background: {
    color: Color;
    image: Background;
    linearGradient: LinearGradient;
  };
  spacing: number;
  url: string;
  refreshAfterDate: Date;
  padding: Padding;
  present: WidgetSize;
}

// <text />
declare interface TextProps {
  color: Color;
  font: Font;
  opacity: number;
  lineLimit: number;
  minimumScaleFactor: number;
  shadow: Shadow;
  url: string;
  align: Alignment;
}

// <image />
declare interface ImageProps {
  src: Image;
  resizable: boolean;
  size: Size;
  opacity: number;
  border: Border;
  containerRelativeShape: boolean;
  tintColor: Color;
  url: string;
  align: Alignment;
  contentMode: "fitting" | "filling";
}

// <date />
declare interface DateProps {
  value: Date;
  color: Color;
  font: Font;
  opacity: number;
  lineLimit: number;
  minimumScaleFactor: number;
  shadow: Shadow;
  url: string;
  align: Alignment;
  style: "relative" | "offset" | "timer" | "date" | "time";
}

// <spacer />
declare interface SpacerProps {
  length: number;
}

// <stack />
declare interface StackProps {
  background: Background;
  spacing: number;
  size: Size;
  border: Border;
  url: string;
  padding: Padding;
  align: Alignment;
  layout: "horizontal" | "vertical";
}
