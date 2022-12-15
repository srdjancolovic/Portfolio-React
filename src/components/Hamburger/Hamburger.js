import classes from './Hamburger.module.scss';
import { navActions } from '../../store/navActions';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { hamburgerAnim } from '../UI/Animations';
const Hamburger = () => {
    const dispatch = useDispatch();
    const navShown = useSelector((state) => state.navActions.navShown);

    const toggleNavHandler = () => {
        dispatch(navActions.show());
    };

    return (
        <motion.button
            className={classes.hamburger}
            onClick={toggleNavHandler}
            variants={hamburgerAnim}
            initial="hidden"
            animate="visible"
        >
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
        </motion.button>
    );
};

export default Hamburger;
