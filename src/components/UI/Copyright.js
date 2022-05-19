import { SiReact } from 'react-icons/si';
import classes from './Copyright.module.scss';

const Copyright = () => {
  return (
    <div className={`${classes.copyright} ${classes.container}`}>
      <p>
        &#169;2022.
        <span>
          <SiReact />
        </span>
        Portfolio Website
      </p>
      <p>Website by Srdjan Colovic</p>
    </div>
  );
};
export default Copyright;
