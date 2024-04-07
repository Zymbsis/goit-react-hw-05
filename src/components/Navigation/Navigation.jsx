import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={`${css.headerContainer} + container`}>
        <nav>
          <NavLink className={getNavLinkClass} to={'/'}>
            Home
          </NavLink>
          <NavLink className={getNavLinkClass} to={'/movies'}>
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
