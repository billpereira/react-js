import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
    <NavLink to="/portfolio" exact activeClassName="is-active">Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
);

export default Header;
