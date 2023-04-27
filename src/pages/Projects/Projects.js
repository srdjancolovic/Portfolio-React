import { Route } from 'react-router-dom';
import { Switch, useLocation } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
import { MdOutlineLiveTv } from 'react-icons/md';
import { useEffect } from 'react';
import srdjanColovic from '../../assets/SrdjanColovicPortfolio.webp';
import lukaukropina from '../../assets/LukaUkropina.webp';
import azzuro from '../../assets/Azzuro.webp';
import budgetApp from '../../assets/BudgetApp.webp';
import diceGame from '../../assets/DiceGame.webp';
import foodApp from '../../assets/FoodApp.webp';
import guessTheNum from '../../assets/GuessTheNum.webp';
import gineaBg from '../../assets/GineaBg.webp';
import intravell from '../../assets/intravell.webp';
import motelKonak from '../../assets/motelKonak.webp';
import registerForm from '../../assets/RegisterForm.webp';
import tomanovic from '../../assets/Tomanovic.webp';
import weatherApp from '../../assets/WeatherApp.webp';
import studioAcima from '../../assets/studioAcimaBg.webp';
import { NavLink } from 'react-router-dom';
import classes from './Projects.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

import { fadeInLeftAnim } from '../../components/UI/Animations';
import { projectsContainerAnimInOut } from '../../components/UI/Animations';
import { singleProjectAnim } from '../../components/UI/Animations';

// import { FaHourglassStart } from 'react-icons/fa';
const Projects = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const websites = [
        {
            id: 'w8',
            img: window.location.origin + intravell,
            name: 'IN TRAVEL AGENCIJA - WordPress',
            // code: 'https://github.com/srdjancolovic/GINEA',
            link: 'https://intravel.ba/',
        },
        {
            id: 'w1',
            img: window.location.origin + gineaBg,
            name: 'ZU GINEA',
            code: 'https://github.com/srdjancolovic/GINEA',
            link: 'https://zuginea.netlify.app/',
        },
        {
            id: 'w2',
            img: window.location.origin + lukaukropina,
            name: 'Luka Ukropina | Portfolio Website',
            code: 'https://github.com/srdjancolovic/Luka-Ukropina-Portfolio-Website',
            link: 'https://www.lukaukropina.com/',
        },
        {
            id: 'w3',
            img: window.location.origin + srdjanColovic,
            name: 'Srdjan Colovic Portfolio v1',
            code: 'https://github.com/srdjancolovic/Portfolio-Website-v1',
            link: 'https://srdjancolovicportfoliov1.netlify.app/',
        },
        {
            id: 'w4',
            img: window.location.origin + studioAcima,
            name: 'Studio Acima (beta)',
            code: 'https://github.com/srdjancolovic/Studio-Acima-Portfolio',
            link: 'https://studioacimabetaversion.netlify.app/',
        },
        {
            id: 'w5',
            img: window.location.origin + motelKonak,
            name: 'Motel Konak Mosko',
            code: 'https://github.com/srdjancolovic/Motel-Konak',
            link: 'https://motelkonakmosko.com/',
        },
        {
            id: 'w6',
            img: window.location.origin + tomanovic,
            name: 'Stomatoloska ordinacija Tomanovic',
            code: 'https://github.com/srdjancolovic/Stomatoloska-ordinacija-Tomanovic',
            link: 'https://drtomanovic.net/',
        },
        {
            id: 'w7',
            img: window.location.origin + azzuro,
            name: 'Salon keramike Azzurro',
            code: 'https://github.com/srdjancolovic/Salon-Azzurro',
            link: 'http://azzurrokeramika.me/',
        },
    ];

    const apps = [
        {
            id: 'a1',
            img: window.location.origin + foodApp,
            name: 'Food App',
            code: 'https://github.com/srdjancolovic/Food-Order-App',
            link: 'https://reactfoodorderingapp.netlify.app/',
        },
        {
            id: 'a2',
            img: window.location.origin + weatherApp,
            name: 'Weather App',
            code: 'https://github.com/srdjancolovic/Weather-App',
            link: 'https://weatherforecast7days.netlify.app/',
        },
        {
            id: 'a3',
            img: window.location.origin + registerForm,
            name: 'Register Form',
            code: 'https://github.com/srdjancolovic/User-Register-Form',
            link: 'https://userregisterform.netlify.app/',
        },
        {
            id: 'a4',
            img: window.location.origin + budgetApp,
            name: 'Budget App',
            code: 'https://github.com/srdjancolovic/Budget-App',
            link: 'https://trackbudgetapp.netlify.app/',
        },
        {
            id: 'a5',
            img: window.location.origin + diceGame,
            name: 'Dice Game',
            code: 'https://github.com/srdjancolovic/Dice-game',
            link: 'https://gameofdices.netlify.app/',
        },
        {
            id: 'a6',
            img: window.location.origin + guessTheNum,
            name: 'Guess the number',
            code: 'https://github.com/srdjancolovic/Guess-number',
            link: 'https://gameofguessingnumber.netlify.app/',
        },
    ];

    //Webistes and apps concated
    const all = websites.concat(apps);

    //All content
    const allContent = all.map((item) => {
        return (
            <motion.div
                className={classes.projects__item}
                key={item.id}
                variants={singleProjectAnim}
                initial="initial"
                whileInView="visible"
                viewport={singleProjectAnim.viewport}
            >
                <img src={`${item.img}`} alt={item.name} />
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h6>{item.name}</h6>
                </a>
                <div className={classes.projects__links}>
                    <a
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsCodeSlash />
                    </a>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdOutlineLiveTv />
                    </a>
                </div>
            </motion.div>
        );
    });

    //All websites
    const allWebsites = websites.map((website) => {
        return (
            <motion.div
                className={classes.projects__item}
                key={website.id}
                variants={singleProjectAnim}
                initial="initial"
                whileInView="visible"
                viewport={singleProjectAnim.viewport}
            >
                <img src={website.img} alt={website.name} />

                <a
                    href={website.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h6>{website.name}</h6>
                </a>

                <div className={classes.projects__links}>
                    <a
                        href={website.code}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsCodeSlash />
                    </a>
                    <a
                        href={website.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdOutlineLiveTv />
                    </a>
                </div>
            </motion.div>
        );
    });

    //All apps
    const allApps = apps.map((app) => {
        return (
            <motion.div
                className={classes.projects__item}
                key={app.id}
                variants={singleProjectAnim}
                initial="initial"
                whileInView="visible"
                viewport={singleProjectAnim.viewport}
            >
                <img src={app.img} alt={app.name} />
                <a href={app.link} target="_blank" rel="noopener noreferrer">
                    <h6>{app.name}</h6>
                </a>

                <div className={classes.projects__links}>
                    <a
                        href={app.code}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsCodeSlash />
                    </a>
                    <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdOutlineLiveTv />
                    </a>
                </div>
            </motion.div>
        );
    });

    return (
        <div className={`${classes.projects} ${classes.container}`}>
            <motion.h2
                variants={fadeInLeftAnim}
                initial="initial"
                whileInView="visible"
                viewport={fadeInLeftAnim.viewport}
            >
                Projects
            </motion.h2>
            <motion.p
                variants={fadeInLeftAnim}
                initial="initial"
                whileInView="visible"
                viewport={fadeInLeftAnim.viewport}
            >
                So far I have built several websites and mini applications.
                Websites are mostly made for clients according to their needs
                with original design created by me. All apps shown here are
                created as practical projects. Live preview and source code is
                available for each website or app. As for portfolio website,
                it's completely made in React JS.
            </motion.p>

            <motion.div
                className={classes.projects__controls}
                variants={fadeInLeftAnim}
                initial="initial"
                whileInView="visible"
                viewport={fadeInLeftAnim.viewport}
            >
                <NavLink
                    to="/projects"
                    exact
                    activeClassName={classes['projects__controls--btn-active']}
                >
                    All
                </NavLink>
                <NavLink
                    to="/projects/websites"
                    exact
                    activeClassName={classes['projects__controls--btn-active']}
                >
                    Websites
                </NavLink>
                <NavLink
                    to="/projects/apps"
                    exact
                    activeClassName={classes['projects__controls--btn-active']}
                >
                    Apps
                </NavLink>
            </motion.div>
            {
                <AnimatePresence>
                    <Switch location={location} key={location.key}>
                        <Route path="/projects" exact>
                            <motion.div
                                className={classes.projects__container}
                                variants={projectsContainerAnimInOut}
                                initial="initial"
                                whileInView="visible"
                                viewport={
                                    projectsContainerAnimInOut.smallerViewport
                                }
                            >
                                {allContent}{' '}
                            </motion.div>
                        </Route>
                        <Route path="/projects/websites" exact>
                            <motion.div
                                className={classes.projects__container}
                                variants={projectsContainerAnimInOut}
                                initial="initial"
                                whileInView="visible"
                                viewport={
                                    projectsContainerAnimInOut.smallerViewport
                                }
                            >
                                {allWebsites}{' '}
                            </motion.div>
                        </Route>
                        <Route path="/projects/apps" exact>
                            <motion.div
                                className={classes.projects__container}
                                variants={projectsContainerAnimInOut}
                                initial="initial"
                                whileInView="visible"
                                viewport={
                                    projectsContainerAnimInOut.smallerViewport
                                }
                            >
                                {allApps}{' '}
                            </motion.div>
                        </Route>
                    </Switch>
                </AnimatePresence>
            }

            {/* <div className={classes.projects__container}>
        <div className={classes.projects__item}>
          <img src={prof} alt="Project background img" />
          <h6>Naziv projekta</h6>
          <div className={classes.projects__links}>
            <a href="">
              <BsCodeSlash />
            </a>
            <a href="">
              <MdOutlineLiveTv />
            </a>
          </div>
        </div>
      </div> */}
        </div>
    );
};

export default Projects;

// {
//   <Switch>
//           <Route path='/projects' exact>
//             <h2>asd</h2>
//           </Route>
//           <Route path='/projects/websites' exact>
//             <h2>sajtovi</h2>
//           </Route>
//           <Route path='/projects/apps' exact>
//             <h2>apps</h2>
//           </Route>
//         </Switch>
// }
