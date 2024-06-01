import React from "react";

const ForgotPasswordView = ({
  handleChange,
  forgotPassword,
  hasError,
  matchPassword,
  resetPassword,
  setMatchPassword,
}) => {
  return (
    <div className="activate-account">
      <h1>Reset Password</h1>
      <p>
        A verification code has been sent to your email. Please enter the
        verification code below. If you did not receive the email, please check
        your spam folder.
      </p>
      <form>
        <label>
          Password:
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={forgotPassword.password}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            name="confirmPassword"
            type="password"
            onChange={(e) => {
              handleChange(e);
              setMatchPassword(forgotPassword.password !== e.target.value);
            }}
            value={forgotPassword.confirmPassword}
            required
          />
        </label>
        {matchPassword && forgotPassword.confirmPassword.length > 0 && (
          <p style={{ color: "red" }}>Passwords do not match</p>
        )}
        <label>
          Verification code:
          <input
            name="otp"
            type="text"
            onChange={handleChange}
            value={forgotPassword.otp}
            required
          />
        </label>
        <button type="submit" onClick={resetPassword}>
          Reset Password
        </button>
      </form>
      {hasError && (
        <p style={{ color: "red" }}>
          Please verify input fields and try again.
        </p>
      )}
    </div>
  );
};

export default ForgotPasswordView;
