import classes from './Hamburger.module.scss';
import { navActions } from '../../store/navActions';
import { useDispatch, useSelector } from 'react-redux';

const Hamburger = () => {
  const dispatch = useDispatch();
  const navShown = useSelector((state) => state.navActions.navShown);

  const toggleNavHandler = () => {
    dispatch(navActions.show());
  };

  return (
    <button className={classes.hamburger} onClick={toggleNavHandler}>
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
      {navShown ? (
        <span className={classes['hamburger__remove-dot']}></span>
      ) : (
        <span></span>
      )}
    </button>
  );
};

export default Hamburger;
