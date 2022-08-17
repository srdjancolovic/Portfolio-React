import classes from './Navigation.module.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { navActions } from '../../store/navActions';
import { HashLink as Link } from 'react-router-hash-link';

import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';

const Navigation = () => {
  const dispatch = useDispatch();
  const navShown = useSelector((state) => state.navActions.navShown);

  const hideNavigationHandler = () => {
    dispatch(navActions.show());
  };

  return (
    <Fragment>
      <div className={navShown ? classes['navigation__overlay'] : classes['navigation__overlay-hide']} onClick={hideNavigationHandler}></div>
      <div
      className={!navShown ? classes.navigation : classes['navigation-open']}
    >
      <Link
        smooth
        to="/#landing"
        onClick={hideNavigationHandler}
        className={classes['navigation__nav-link']}
      >
        <AiOutlineHome />
      </Link>
      <Link
        smooth
        to="/#about"
        onClick={hideNavigationHandler}
        className={classes['navigation__nav-link']}
      >
        <BiUserCircle />
      </Link>
      <Link
        to="/projects"
        onClick={hideNavigationHandler}
        className={classes['navigation__nav-link']}
      >
        <RiSuitcaseLine />
      </Link>
      <Link
        smooth
        to="/#contact"
        onClick={hideNavigationHandler}
        className={classes['navigation__nav-link']}
      >
        <BiMessageDetail />
      </Link>
    </div>
    </Fragment>
  );
};

export default Navigation;
