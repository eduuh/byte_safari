import { styled } from "styled-components";
import { spaceSchema } from "../common/common";

const Layers = styled.div`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
`;

export const Form = () => {
  return (
    <div>
      <Layers>
        <Layers gutter="s">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
        </Layers>

        <Layers gutter="s">
          <label htmlFor="name2">Last Name</label>
          <input type="text" id="name2" />
        </Layers>

        <Layers gutter="s">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </Layers>

        <Layers gutter="s">
          <label htmlFor="street">Street Address</label>
          <input type="text" id="street" />
        </Layers>

        <Layers gutter="s">
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </Layers>

        <Layers gutter="s">
          <label htmlFor="country">country</label>
          <input type="text" id="country" />
        </Layers>

        <Layers gutter="s">
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" />
        </Layers>
        <button>Subscribe</button>
      </Layers>
    </div>
  );
};

export const InputGroup = (props) => {
  return (
    <Layers gutter="m">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Layers>
  );
};
