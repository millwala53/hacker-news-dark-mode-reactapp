import React from "react";
import ListItem from "components/ListItem";

import { ListWrapper } from "./styles";

const List = ({ stories }) => (
  <ListWrapper>
    {stories.map(story => {
      return <ListItem key={story.id} {...story} />;
    })}
  </ListWrapper>
);

export default List;
