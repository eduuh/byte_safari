import { authors } from "../../data/authors";
import { books } from "../../data/books";
import { LargeAuthorListItem } from "./authors/LargeAuthorListItem";
import { SmallAuthorListItem } from "./authors/SmallAuthorListItem";
import { LargeBookListItem } from "./books/LargeBookListItem";
import { SmallBookListItem } from "./books/SmallBookItem";
import { NumberedList } from "./NumberedList";
import { RegularList } from "./RegularList";

const AuthorLists = () => {
  return (
    <>
      <RegularList
        items={authors}
        ItemComponent={SmallAuthorListItem}
        sourceName={"author"}
      />

      <NumberedList
        items={authors}
        ItemComponent={LargeAuthorListItem}
        sourceName={"author"}
      />
    </>
  );
};

const BookLists = () => {
  return (
    <>
      <RegularList
        items={books}
        ItemComponent={SmallBookListItem}
        sourceName={"book"}
      />

      <NumberedList
        items={books}
        ItemComponent={LargeBookListItem}
        sourceName={"book"}
      />
    </>
  );
};

export const Lists = () => {
  return (
    <>
      <AuthorLists />
      <BookLists />
    </>
  );
};
