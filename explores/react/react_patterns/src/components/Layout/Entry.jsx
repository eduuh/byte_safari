import { SplitScreen } from "./split-screen";

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

export function LayoutDP() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent title={"Right"} />
      <RightSideComponent title={"Left"} />
    </SplitScreen>
  );
}
