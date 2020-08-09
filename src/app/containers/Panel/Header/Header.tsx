import * as React from "react";
import { HeaderWrapper } from "./styles";
import { Props } from "./typing";

export default (props: Props) => {
  const { onPressCreationButton } = props;

  return (
    <HeaderWrapper>
      <button onClick={onPressCreationButton}> Create New One </button>
    </HeaderWrapper>
  );
};
