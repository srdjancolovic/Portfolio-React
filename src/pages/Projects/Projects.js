import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
import { MdOutlineLiveTv } from 'react-icons/md';
import { useEffect } from 'react';
import prof from '../../assets/id-img.webp';
import { NavLink } from 'react-router-dom';
import classes from './Projects.module.scss';
// import { FaHourglassStart } from 'react-icons/fa';
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(prof);
    console.log(window.location.href.includes('localhost:3000'))
    console.log(window.location)
  }, []);

  const websites = [
    {
      id: 'w1',
      img: window.location.origin  + prof,
      // img: window.location.href.includes('localhost:3000') ?  : treba locak FaHourglassStart, pa onda iz konzole, u suprotnom je live ,
      name: 'Srdjan',
      link: 'https://srdjancolovic.com/',
    },
    {
      id: 'w2',
      // img:  window.location.href.includes('localhost:3000') ? 'localhost:3000/projects/../../assets/id-img.webp'  : null,
      img: window.location.origin  + prof,
      name: 'Janko',
      link: 'https://srdjancolovic.com/',
    },
    {
      id: 'w3',
      img: 'slika',
      name: 'Stanko',
      code: '',
      link: 'https://srdjancolovic.com/',
    },
  ];

  const apps = [
    {
      id: 'a1',
      img: 'slika',
      name: 'App1',
      link: 'https://srdjancolovic.com/',
    },
    {
      id: 'a2',
      img: 'slika',
      name: 'App2',
      link: 'https://srdjancolovic.com/',
    },
    {
      id: 'a3',
      img: 'slika',
      name: 'App3',
      code: '',
      link: 'https://srdjancolovic.com/',
    },
    {
      id: 'a4',
      img: 'slika',
      name: 'App3',
      code: '',
      link: 'https://srdjancolovic.com/',
    },
  ];

  console.log(websites[0].link);

  //Webistes and apps concated
  const all = websites.concat(apps);

  //All content
  const allContent = all.map((item) => {
    return (
      <div className={classes.projects__item} key={item.id}>
        <img src={`${item.img}`} alt="Project background img" />
        <h6>{item.name}</h6>
        <div className={classes.projects__links}>
          <a href={item.code} target="_blank" rel="noopener noreferrer">
            <BsCodeSlash />
          </a>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <MdOutlineLiveTv />
          </a>
        </div>
      </div>
    );
  });

  //All websites
  const allWebsites = websites.map((website) => {
    return (
      <div className={classes.projects__item} key={website.id}>
        <img src={website.img} alt="Project background img" />
        <h6>{website.name}</h6>
        <div className={classes.projects__links}>
          <a href={website.code} target="_blank" rel="noopener noreferrer">
            <BsCodeSlash />
          </a>
          <a href={website.link} target="_blank" rel="noopener noreferrer">
            <MdOutlineLiveTv />
          </a>
        </div>
      </div>
    );
  });

  //All apps
  const allApps = apps.map((app) => {
    return (
      <div className={classes.projects__item} key={app.id}>
        <img src={app.img} alt="Project background img" />
        <h6>{app.name}</h6>
        <div className={classes.projects__links}>
          <a href={app.code} target="_blank" rel="noopener noreferrer">
            <BsCodeSlash />
          </a>
          <a href={app.link} target="_blank" rel="noopener noreferrer">
            <MdOutlineLiveTv />
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className={`${classes.projects} ${classes.container}`}>
      <h2>Projects</h2>
      <p>
        So far I have built several websites and mini applications. Websites are
        mostly made for clients according to their needs with original design
        created by me. All apps shown here are created as practical projects.
        Live preview or code is available for each website or app. As for portfolio website, it's completely made in React JS.
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
      {
        <Switch>
          <Route path="/projects" exact>
            <div className={classes.projects__container}>{allContent} </div>
          </Route>
          <Route path="/projects/websites" exact>
            <div className={classes.projects__container}>{allWebsites} </div>
          </Route>
          <Route path="/projects/apps" exact>
            <div className={classes.projects__container}>{allApps} </div>
          </Route>
        </Switch>
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
