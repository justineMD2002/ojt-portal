import React from "react";

const ForgotPasswordEmailModalView = ({
  handleOpenModal,
  handleChange,
  sendEmailConfirmation,
  email,
}) => {
  return (
    <div className="overlay">
      <div className="modal-container">
        <h2>Email Confirmation</h2>
        <p>
          Enter your email below to receive a verification code to reset your
          password.
        </p>
        <form>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
              value={email}
              required
            />
          </label>
          <button type="submit" onClick={(e) => sendEmailConfirmation(e)}>
            Confirm
          </button>
        </form>

        <div className="close">
          <button onClick={handleOpenModal}>X</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordEmailModalView;
