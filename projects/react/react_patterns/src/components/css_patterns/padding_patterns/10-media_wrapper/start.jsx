import { Grid } from "../../4-grid-pattern/start";
import tshirt from "../../../../images/tshirt.jpg";
import { styled } from "styled-components";

const Description = styled.p``;
export const MediaWrapper = styled.div`
  position: relative;

  --n: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --d: ${(props) => (props.ratio ? props.ratio[1] : 1)};

  ${(props) =>
    props.ratio &&
    `aspect-ratio: var(--n) / var(--d);
  @supports not (aspect-ratio: 1/1) {
    padding-bottom: calc(var(--d) / var(--n) * 100%);
  }`}

  > * {
    position: abosolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;

    overflow: hidden;
    display: flex;
    justify-center: center;
    align-item: center;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const NewProducts = () => {
  return (
    <div>
      <MediaWrapper ratio={[1, 1]}>
        <img src={tshirt} alt="" />
      </MediaWrapper>
      <Description>White T-shirt - $19.99</Description>
    </div>
  );
};

const NewProductsList = () => {
  return (
    <Grid gutter="xl" minItemWidth="18rem">
      <NewProducts />
      <NewProducts />
      <NewProducts />
      <NewProducts />
    </Grid>
  );
};

export default NewProductsList;
