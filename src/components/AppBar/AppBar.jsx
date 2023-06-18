import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import css from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIng = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIng ? <UserMenu /> : <AuthNav />}
      {/* <h1 className={css.titleAplication}>
        Phone<span className={css.titleColor}>book</span>
      </h1>
      <button type="button" className={css.btnAddContact} onClick={onClose}>
        <BiUserPlus className={css.addModalIcon} size={25} />
      </button> */}
    </header>
  );

  //   const activeClass = ({ isActive }) =>
  //   isActive ? `${css.active}` : `${css.navLink}`;

  // return (
  //   <header>
  //     <div className={css.container}>
  //       <img
  //         className={css.logo__img}
  //         src={logo}
  //         alt="logo"
  //         width={140}
  //         height={140}
  //       />

  //       <ul className={css.nav__list}>
  //         <li>
  //           <NavLink className={activeClass} to="/">
  //             Home
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink className={activeClass} to="/contacts">
  //             Contacts
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //   </header>
  // );
};

// AppBar.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
