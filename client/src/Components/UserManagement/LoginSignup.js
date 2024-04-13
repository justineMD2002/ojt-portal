import React from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "./Components";

export function LoginSignup() {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/studentProgress");
  };

  return (
    <div>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleLogin}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleLogin}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button type="submit">Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Trainee!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </div>
  );
}
