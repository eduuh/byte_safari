import { styled } from "styled-components";
import { spaceSchema } from "../../common/common";
import { Card } from "./card";

export const Grid = styled.div`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth ?? "700px"}, 100%), 1fr)
  );
`;

export const Cards = () => {
  return (
    <Grid minItemWidth="10rem" gutter="xl">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};
