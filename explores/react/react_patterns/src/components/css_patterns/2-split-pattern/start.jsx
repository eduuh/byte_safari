import { styled } from "styled-components";
import { spaceSchema } from "../common/common";
import { Form } from "./form";

const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const Split = styled.div`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  grid-template-columns: ${({ fraction }) =>
    fractions[fraction] ?? fractions["1/2"]};
`;

export const InfoForm = () => {
  return (
    <Split fraction="1/2">
      <div>
        <h3>General Information</h3>
        <span>All the informations you provide via this form is public</span>
      </div>
      <Form />
    </Split>
  );
};
