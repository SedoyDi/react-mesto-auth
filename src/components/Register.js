import { useState } from "react";

function Register() {
  return (
      <div className="register">
        <form className="register__form">
          <h2 className="register__title">Регистрация</h2>
          <input
            type="url"
            placeholder="Email"
            className="register__input register__input_email_position"
          ></input>
          <input
            type="text"
            placeholder="Пароль"
            className="register__input register__input_password_position"
          ></input>
          <button type="submit" className="register__submit-button">
            Зарегистрироваться
          </button>
          <a className="register__linck">Уже зарегистрированы? Войти</a>
        </form>
      </div>
  );
}

export default Register;
