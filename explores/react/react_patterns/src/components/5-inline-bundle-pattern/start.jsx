import { styled } from "styled-components";
import { spaceSchema } from "../common/common";
import { MenuBasis } from "./menu";

const justifyScheme = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineBundle = styled.div`
  --gutter: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifyScheme[props.justify] ?? justifyScheme.start};
  align-items: ${(props) => justifyScheme[props.align] ?? justifyScheme.center};
  flex-grow: 1;
`;

export const BundledMenu = () => {
  return (
    <MenuBasis>
      <InlineBundle gutter="l" justify="end" align="center">
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About Us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  );
};
