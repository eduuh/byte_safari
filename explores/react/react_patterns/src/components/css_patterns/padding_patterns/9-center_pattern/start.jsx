import { styled } from "styled-components";
import { Layers } from "../../1-layers-patters/start";
import { Extras } from "./components";

// We not breaking the principal of setting the margin
export const Center = styled.div`
  box-sizing: content-box; // converting the margin to be part of the component
  margin-inline-start: auto;
  margin-inline-end: auto;

  margin: 0 auto; // not safe & not cool

  max-inline-size: ${(props) => props.maxWidth};

  ${(props) => props.centerText && `text-align: center;`}

  ${(props) =>
    props.centerChildren &&
    `
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export const Profile = () => {
  return (
    <div>
      <Center as={Layers} gutter="s" maxWidth="60ch" centerChildren centerText>
        <h2>i am title</h2>
        <p>
          This is a long long text, long long long long long long long ingin
          lgon ginignn osntaorntirsntin ostnistnisnt onistnisnt instonsitn
          stinsitnistn isntist nisnitns tis tisnitnsitnisnt isntis tisntin i
          snitnsitnistnsitn sitnisntisnti stinsitnisntinsitn sitnistn ist
        </p>
        <Extras />
      </Center>
    </div>
  );
};
