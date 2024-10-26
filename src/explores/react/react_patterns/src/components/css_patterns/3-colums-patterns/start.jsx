import { styled } from "styled-components";
import { InputGroup } from "../2-split-pattern/form";
import { Split } from "../2-split-pattern/start";
import { spaceSchema } from "../common/common";

export const Columns = styled.div` 
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  grid-template-columns: repeat(var(--columns),1fr);
`;

export const Column = styled.div`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns))};
`;

export const InfoFormWithColumns = () => {
  return (
    <Split fraction="1/3" gutter="xxl">
      <div>
        <h3>General Information</h3>
        <span>
          All the information you provide via this form will be exposed to the
          public
        </span>
      </div>
      <Form />
    </Split>
  );
};

const Form = () => {
  return (
    <Columns columns={6} gutter="xxl">
      <Column $span={3}>
        <InputGroup htmlFor="firstName" label="First Name">
          <input type="text" id="firstName" />
        </InputGroup>
      </Column>

      <Column $span={3}>
        <InputGroup htmlFor="lastname" label="Last Name">
          <input type="text" id="lastname" />
        </InputGroup>
      </Column>

      <Column $span={4}>
        <InputGroup htmlFor="email" label="Email">
          <input type="text" id="email" />
        </InputGroup>
      </Column>

      <Column $span={3}>
        <InputGroup htmlFor="address" label="Street Address">
          <input type="text" id="address" />
        </InputGroup>
      </Column>

      <Column $span={3}>
        <InputGroup htmlFor="city" label="City">
          <input type="text" id="city" />
        </InputGroup>
      </Column>
      <Column $span={3}>
        <InputGroup htmlFor="country" label="country">
          <input type="text" id="country" />
        </InputGroup>
      </Column>

      <Column $span={3}>
        <InputGroup htmlFor="country" label="country">
          <input type="text" id="country" />
        </InputGroup>
      </Column>
      <Column $span={3}>
        <InputGroup htmlFor="phone" label="Phone Number">
          <input type="text" id="phone" />
        </InputGroup>
      </Column>
    </Columns>
  );
};
