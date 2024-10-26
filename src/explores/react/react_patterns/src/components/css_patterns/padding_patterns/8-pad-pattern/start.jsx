import { styled } from "styled-components";
import { spaceSchema } from "../../../common/common";
import { Layers } from "../../1-layers-patters/start";
import { Grid } from "../../4-grid-pattern/start";
import { InlineBundle } from "../../5-inline-bundle-pattern/start";
import { Bottom, Card, Description, Name, Price, Top } from "./components";

export const Pad = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((paddingKey) => spaceSchema[paddingKey])
      .join(" ");
  }};
`;

export const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["s", "l"],
}))`
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 4px;
`;

const GiftCard = () => {
  return (
    <Card>
      <Pad padding="l">
        <Top>
          <Name>Gift Card</Name>
          <Description>This is one of our gift cards you can buy.</Description>
          <Price>$25.99</Price>
          <InlineBundle gutter="none" justify="center">
            <Button>Buy</Button>
          </InlineBundle>
        </Top>
      </Pad>

      <Bottom>
        <Pad padding="l">
          <Layers gutter="m">
            <span>Includes:</span>
            <ul>
              <li>This is inclusion number 1</li>
              <li>
                This is inclusion number 2 which comes after inclusion number1
              </li>
              <li>This is inclusion number 3</li>
            </ul>
          </Layers>
        </Pad>
      </Bottom>
    </Card>
  );
};

const GiftCardList = () => {
  return (
    <Grid gutter="xl" minItemWidth="16rem">
      <GiftCard />
      <GiftCard />
      <GiftCard />
      <GiftCard />
    </Grid>
  );
};

export default GiftCardList;
