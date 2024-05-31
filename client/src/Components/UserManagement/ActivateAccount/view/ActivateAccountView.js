import React from "react";

const ActivateAccountView = ({
  activationCode,
  handleActivationCodeChange,
  activateAccount,
  hasError,
}) => {
  return (
    <div className="activate-account">
      <h1>Activate Account</h1>
      <p>
        An activation code has been sent to your email. Please enter the
        activation code below. If you did not receive the email, please check
        your spam folder.
      </p>
      <form>
        <label>
          Activation Code:
          <input
            type="text"
            onChange={handleActivationCodeChange}
            value={activationCode}
          />
        </label>
        <button type="submit" onClick={activateAccount}>
          Activate Account
        </button>
      </form>
      {hasError && (
        <p style={{ color: "red" }}>
          Activation code is invalid. Please check your email for the correct
          activation code.
        </p>
      )}
    </div>
  );
};

export default ActivateAccountView;
