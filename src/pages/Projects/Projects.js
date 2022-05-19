import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
import { MdOutlineLiveTv } from 'react-icons/md';
import prof from '../../assets/id-img.webp';
import { NavLink } from 'react-router-dom';
import classes from './Projects.module.scss';
const Projects = () => {
  return (
    <div className={`${classes.projects} ${classes.container}`}>
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsum
        ratione, explicabo libero labore obcaecati sunt veniam, quia quam esse a
        voluptatum necessitatibus, dolore quasi quae ad mollitia aperiam id.
      </p>

      <div className={classes.projects__controls}>
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
      </div>

      <div className={classes.projects__container}>
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
      </div>
    </div>
  );
};

export default Projects;

// {
//   /* <Switch>
//           <Route path='/projects' exact>
//             <h2>asd</h2>
//           </Route>
//           <Route path='/projects/websites' exact>
//             <h2>sajtovi</h2>
//           </Route>
//           <Route path='/projects/apps' exact>
//             <h2>apps</h2>
//           </Route>
//         </Switch> */
// }
