import classes from './About.module.scss';
import { Link } from 'react-router-dom';
import idImg from '../../assets/id-img.webp';
import CV from '../../assets/CV.pdf';
import AutoPlayMethods from '../../components/Slider/Slider';
const About = () => {
  return (
    <section id="about" className={`${classes.about} ${classes.container}`}>
      <div className={classes.about__text}>
        <h2>About</h2>
        <p>
          Self-taught Frontend developer with more than two years of experience.
          Motivated to work, eager to learn new things and always giving my
          best. Speaking and writing English fluently. Willing to constantly
          upgrade knowledge and make progress as a developer.
        </p>
        <div className={classes.about__experience}>
          <h5>Work experience:</h5>
          <p>April 2020. - April 2022.: Freelancer</p>
          <p>April 2022. - present: Eton Digital LTD.</p>
        </div>
        <h5>Skills:</h5>
        <AutoPlayMethods />
        <div className={classes.about__buttons}>
          <Link
            to="/projects"
            className={`${classes.btn} ${classes['about__projects-cta']} `}
          >
            Projects
          </Link>
          <a
            href={CV} download={'CV SRDJAN COLOVIC'}
            className={`${classes.btn} ${classes['about__projects-cta']} `}
          >
            Download CV
          </a>
        </div>
      </div>

      <div className={classes.about__img}>
        <img src={idImg} alt="" />
      </div>
    </section>
  );
};

export default About;
