import classes from './About.module.scss';
import { Link } from 'react-router-dom';
import idImg from '../../assets/id-img.webp';
import CV from '../../assets/CV.pdf';
import AutoPlayMethods from '../../components/Slider/Slider';
import { motion } from 'framer-motion';
import { fadeInUpAnim } from '../../components/UI/Animations';

const About = () => {
  return (
    <section id="about" className={`${classes.about} ${classes.container}`}>
      <div className={classes.about__text}>
        <motion.h2
          variants={fadeInUpAnim}
          initial="initial"
          whileInView="visible"
          viewport={fadeInUpAnim.viewport}
        >
          About
        </motion.h2>
        <motion.p
          variants={fadeInUpAnim}
          initial="initial"
          whileInView="visible"
          viewport={fadeInUpAnim.viewport}
        >
          Self-taught Frontend developer with more than two years of experience.
          Motivated to work, eager to learn new things and always giving my
          best. Speaking and writing English fluently. Willing to constantly
          upgrade knowledge and make progress as a developer.
        </motion.p>
        <motion.div
          className={classes.about__experience}
          variants={fadeInUpAnim}
          initial="initial"
          whileInView="visible"
          viewport={fadeInUpAnim.viewport}
        >
          <h5>Work experience:</h5>
          <p>April 2020. - April 2022.: Freelancer</p>
          <p>April 2022. - present: Eton Digital LTD.</p>
        </motion.div>
        <motion.h5
          variants={fadeInUpAnim}
          initial="initial"
          whileInView="visible"
          viewport={fadeInUpAnim.viewport}
        >
          Skills:
        </motion.h5>
        <motion.div
          variants={fadeInUpAnim}
          initial="initial"
          whileInView="visible"
          viewport={fadeInUpAnim.viewport}
        >
          <AutoPlayMethods />
        </motion.div>
        <motion.div
          className={classes.about__buttons}
          variants={fadeInUpAnim}
          initial="initial"
          whileInView="visible"
          viewport={fadeInUpAnim.viewport}
        >
          <Link
            to="/projects"
            className={`${classes.btn} ${classes['about__projects-cta']} `}
          >
            Projects
          </Link>
          <a
            href={CV}
            download={'CV SRDJAN COLOVIC'}
            className={`${classes.btn} ${classes['about__projects-cta']} `}
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        className={classes.about__img}
        variants={fadeInUpAnim}
        initial="initial"
        whileInView="visible"
        viewport={fadeInUpAnim.viewport}
      >
        <img src={idImg} alt="" />
      </motion.div>
    </section>
  );
};

export default About;
