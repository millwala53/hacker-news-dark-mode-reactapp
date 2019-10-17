import React, { Component } from "react";
import InifiniteScroll from "react-infinite-scroll-component";
import { ThemeProvider } from "styled-components";
import { colorsDark } from "styles/palette";
import List from "components/List";
import Loader from "components/Loader";
import { Wrapper, Title } from "./styles";
class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }
  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    console.log("fetych stories", this.props);
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };
  render() {
    const { stories, hasMoreStories } = this.props;
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader </Title>
            <InifiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStories}
              loader={<Loader></Loader>}
              style={{
                height: "100%",
                overflow: "visible"
              }}
            >
              <List stories={stories} />
            </InifiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
