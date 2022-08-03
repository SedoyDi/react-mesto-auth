import {Link} from "react-router-dom";

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
          <Link className="register__link" to="/signin">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </div>
  );
}

export default Register;
