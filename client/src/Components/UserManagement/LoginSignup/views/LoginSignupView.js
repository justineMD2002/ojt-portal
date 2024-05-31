import React from "react";
import * as Components from "../../Components";
import { StudentController } from "../controllers/StudentController";
import { SupervisorController } from "../controllers/SupervisorController";
import { DropdownUserTypeController } from "../controllers/DropdownUserTypeController";

const LoginSignupView = ({
  signIn,
  toggle,
  userType,
  setUserType,
  user,
  handleChange,
  handleLogin,
  handleSignup,
  isLoggedIn,
  student,
  setStudent,
  supervisor,
  setSupervisor,
}) => (
  <div className="login-signup-wrapper">
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form
          onSubmit={async (e) => {
            await handleSignup(e);
            setTimeout(() => {}, 3000);
            await handleLogin(e);
          }}
        >
          <Components.Title>Create Account</Components.Title>
          {!userType && (
            <DropdownUserTypeController setUserType={setUserType} />
          )}
          <div className="content">
            {userType === "Student" && (
              <StudentController student={student} setStudent={setStudent} />
            )}
            {userType === "Supervisor" && (
              <SupervisorController
                supervisor={supervisor}
                setSupervisor={setSupervisor}
              />
            )}
          </div>
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleLogin}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
          />
          <Components.Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          {isLoggedIn === false && (
            <p style={{ color: "red" }}>
              Login failed. Please check your credentials.
            </p>
          )}
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
    </Components.Container>
  </div>
);

export default LoginSignupView;
