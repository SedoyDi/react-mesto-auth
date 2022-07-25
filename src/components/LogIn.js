import { useState } from "react";

function LogIn() {
  return (
      <div className="login">
        <form className="login__form">
          <h2 className="login__title">Вход</h2>
          <input
            type="url"
            placeholder="Email"
            className="login__input login__input_email_position"
          ></input>
          <input
            type="text"
            placeholder="Пароль"
            className="login__input login__input_password_position"
          ></input>
          <button type="submit" className="login__submit-button">
            Войти
          </button>
        </form>
      </div>
  );
}

export default LogIn;
