import { styled, css } from "styled-components";
import { Icon } from "../5-inline-bundle-pattern/menu";
import { InlineBundle } from "../5-inline-bundle-pattern/start";

const stretchSchema = {
  all: `> * { flex: 1}`,
  start: `> :first-child { flex: 1}`,
  end: `> :last-Child { flex: 1}`,
};

const MenuWrapper = styled.div`
  min-width: 254px;
`;

const responsive = css`
  --switchAt: ${({ switchAt }) =>
    typeof switchAt == "string" ? switchAt : `${switchAt}px`};

  flex-wrap: wrap;

  & > * {
    min-width: fit-content;
    flex-basis: calc((40rem - (100% - var(--gutter)))) * 999;
  }
`;

export const Inline = styled(InlineBundle)`
  flex-wrap: nowrap;

  ${({ stretch }) => {
    if (typeof stretch === "number") {
      return `> :nth-child(${stretch + 1}) { flex: 1}`;
    }
    return stretchSchema[stretch] ?? "";
  }}

  ${({ switchAt }) => switchAt && responsive}
`;

// flex-basis
// large negative number result to zero
// large positive number = available width

export const Menu6 = () => {
  return (
    <MenuWrapper>
      <Inline stretch={0} switchAt="200px">
        <div>
          <Icon />
        </div>
        <InlineBundle gutter="m" align="center" justify="center">
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
