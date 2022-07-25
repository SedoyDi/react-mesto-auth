import { useState } from "react";

function SignUp() {
  return (
      <div className="login">
        <form className="login__form">
          <h2 className="login__title">Регистрация</h2>
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
            Зарегистрироваться
          </button>
          <a>Уже зарегистрированы? Войти</a>
        </form>
      </div>
  );
}

export default SignUp;
