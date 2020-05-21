import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { UserSignOut } from "../auth/auth-handle";

const Dashboard = () => (
  <Background>
    <Logo />
    <Header>Here, we go !</Header>
    <Paragraph>
      A Hackathon Starter template.
      Start making changes, and build realtime applications synced with firebase.
    </Paragraph>
    <Button mode="outlined" onPress={() => UserSignOut()}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
