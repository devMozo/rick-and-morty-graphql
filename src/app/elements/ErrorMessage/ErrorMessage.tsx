import * as React from "react";
import { ErrorMessageWrapper } from "./styles";
import { Props } from "./typing";

export default (props: Props) => {
  const { message } = props;

  return <ErrorMessageWrapper>{message}</ErrorMessageWrapper>;
};
