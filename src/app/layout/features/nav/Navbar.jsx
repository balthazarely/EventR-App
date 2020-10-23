import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function Nav({ setFormOpen }) {
  const history = useHistory();
  // This hook allows us to give the navbar the history prop, which the other ones that are using Router are getting.
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img
            src="/assets/logo-14.svg"
            alt=""
            style={{ marginRight: "15px" }}
          />{" "}
          Revents
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to="/events" />
        {authenticated && (
          <Menu.Item>
            <Button
              as={NavLink}
              to="/createEvent"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
