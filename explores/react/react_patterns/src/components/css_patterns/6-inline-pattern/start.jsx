import { styled, css } from "styled-components";
import { Icon } from "../5-inline-bundle-pattern/menu";
import { InlineBundle } from "../5-inline-bundle-pattern/start";
import { MenuWrapper } from "../6-inline-pattern/start";

const stretchSchema = {
  all: `> *  { flex: 1 }`,
  start: `> :first-child { flex: 1 }`,
  end: `> :last-child { flex: 1 }`,
};

const responsive = css`
  --switchAt: ${({ switchAt }) =>
    typeof switchAt === "string" ? switchAt : `${switchAt}px`};

  flex-wrap: wrap;

  & > * {
    min-width: fit-content;
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`;

export const Inline = styled(InlineBundle)`
  flex-wrap: nowrap;

  ${({ stretch }) => {
    if (typeof stretch === "number") {
      return `> :nth-child(${stretch + 1}) { flex: 1 }`;
    }
    return stretchSchema[stretch] ?? "";
  }}

  ${({ switchAt }) => switchAt && responsive}
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <Inline stretch={1} switchAt="40rem">
        <div>
          <Icon />
        </div>
        <InlineBundle gutter="m" justify="center" align="center">
          <span>Books</span>
          <span>Authors</span>
          <span>Deals</span>
          <span>About Us</span>
        </InlineBundle>
        <Inline justify="end" align="center">
          <span>Login</span>
          <button>Register</button>
        </Inline>
      </Inline>
    </MenuWrapper>
  );
};

export default Menu;
