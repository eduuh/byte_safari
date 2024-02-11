export const SmallAuthorListItem = ({ author }) => {
  const { author: name, age } = author;
  return (
    <p>
      Name: {name} : age: {age}
    </p>
  );
};
