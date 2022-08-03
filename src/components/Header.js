import React from "react";
import headerLogo from "../image/header/logo.svg";
import {Link, Switch, Route} from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="логотип" />
    <Switch>
      <Route exact path={"/"}>
      </Route>
      <Route path={"/signin"}>
        <Link className="header__authorization-link" to="signup">
          Регистрация
          </Link>
      </Route>
      <Route path={"/signup"}>
      <Link className="header__authorization-link" to="signin">
          Войти
          </Link>
      </Route>
    </Switch>
    </header>
  );
}

export default Header;
