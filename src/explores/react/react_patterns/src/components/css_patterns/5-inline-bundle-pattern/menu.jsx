import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  border-radius: 1000px;
  height: 50px;
  width: 50px;
  background-color: pink;
`;

export const MenuBasis = (props) => {
  return (
    <Container>
      <Icon />
      {props.children}
    </Container>
  );
};
