import * as React from "react";
import { CardWrapper } from "./styles";
import { Props } from "./typing";

export default (props: Props) => {
  const { children } = props;

  return <CardWrapper>{children}</CardWrapper>;
};
