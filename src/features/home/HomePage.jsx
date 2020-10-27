import React from "react";
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo-14.svg"
            style={{ marginBottom: 12 }}
          />{" "}
          Revents
        </Header>
        <Button size="huge" inverted onClick={() => history.push("/events")}>
          Get Started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
