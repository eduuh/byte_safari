import { Pad } from "../8-pad-pattern/start";
import { Center } from "../9-center_pattern/start";

export const Description = (props) => (
  <Pad padding="l">
    <Center centerText>{props.children}</Center>
  </Pad>
);
