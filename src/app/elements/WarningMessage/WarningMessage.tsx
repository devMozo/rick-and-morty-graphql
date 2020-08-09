import * as React from "react";
import { WarningMessageWrapper } from "./styles";
import { Props } from "./typing";

export default (props: Props) => {
  const { message } = props;

  return <WarningMessageWrapper>{message}</WarningMessageWrapper>;
};
