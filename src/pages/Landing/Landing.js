import classes from './Landing.module.scss';
import { BsFacebook } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { ImLinkedin2 } from 'react-icons/im';
import SocialIcon from '../../components/UI/SocialIcon';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { headingAnimantion } from '../../components/UI/Animations';
import { landingBtnAnimation } from '../../components/UI/Animations';
import { socialIconsLandingPageAnimation } from '../../components/UI/Animations';
import { svgAnimation } from '../../components/UI/Animations';

const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={classes.main} id="landing">
            {/* <img src={logo} alt="Logo" className={classes.main__logo} /> */}
            <motion.svg
                className={classes.main__logo}
                viewBox="0 0 122 136"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={svgAnimation}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: 'easeInOut' },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                    d="M84.89 8.38C85.15 9.85334 85.3233 10.8933 85.41 11.5C85.5833 12.02 85.67 12.7567 85.67 13.71C85.67 16.57 85.02 19.2567 83.72 21.77C82.5067 24.1967 80.8167 25.93 78.65 26.97C76.9167 24.63 74.7933 22.6367 72.28 20.99C69.7667 19.2567 66.9933 17.87 63.96 16.83C61.0133 15.7033 57.9367 14.88 54.73 14.36C51.5233 13.84 48.4033 13.58 45.37 13.58C42.3367 13.58 39.4767 13.84 36.79 14.36C34.19 14.7933 31.85 15.4433 29.77 16.31C27.7767 17.09 26.1733 18.0867 24.96 19.3C23.8333 20.5133 23.27 21.9 23.27 23.46C23.53 25.3667 24.7 27.3167 26.78 29.31C28.86 31.2167 31.4167 33.1233 34.45 35.03C37.4833 36.85 40.82 38.67 44.46 40.49C48.1867 42.31 51.8267 44.0433 55.38 45.69C59.8 47.77 63.6133 49.72 66.82 51.54C70.0267 53.2733 72.67 55.2233 74.75 57.39C76.83 59.47 78.39 61.8533 79.43 64.54C80.47 67.2267 80.99 70.4767 80.99 74.29C80.99 78.71 80.2533 82.87 78.78 86.77C77.3067 90.5833 75.14 93.92 72.28 96.78C69.5067 99.64 66.1267 101.85 62.14 103.41C58.1533 105.057 53.69 105.88 48.75 105.88C43.8967 105.88 38.6533 105.143 33.02 103.67C27.3867 102.197 22.1 100.16 17.16 97.56C12.3067 95.0467 8.23334 92.1433 4.94001 88.85C1.73334 85.47 0.130005 81.9167 0.130005 78.19C0.130005 76.4567 0.606672 74.2467 1.56001 71.56C2.60001 68.8733 4.42001 66.0567 7.02001 63.11C7.28001 65.71 8.66667 68.7867 11.18 72.34C13.78 75.8933 17.6367 79.1867 22.75 82.22C27.5167 84.9933 32.4133 87.03 37.44 88.33C42.5533 89.5433 47.32 90.15 51.74 90.15C56.5933 90.15 60.5367 89.5433 63.57 88.33C66.6033 87.1167 68.9867 85.6867 70.72 84.04C72.4533 82.3067 73.6667 80.5733 74.36 78.84C75.0533 77.1067 75.4433 75.72 75.53 74.68C75.4433 72.9467 74.62 71.3 73.06 69.74C71.5867 68.0933 69.55 66.5333 66.95 65.06C64.4367 63.5 61.49 61.94 58.11 60.38C54.73 58.82 51.22 57.26 47.58 55.7C42.12 53.2733 37.3967 51.02 33.41 48.94C29.51 46.7733 26.26 44.6067 23.66 42.44C21.1467 40.1867 19.2833 37.8467 18.07 35.42C16.9433 32.9933 16.38 30.22 16.38 27.1C16.38 22.2467 17.8533 17.6533 20.8 13.32C23.7467 8.98667 27.9933 5.69333 33.54 3.44C36.3133 2.22667 39.26 1.36 42.38 0.839996C45.5867 0.319998 48.7067 0.0599976 51.74 0.0599976C57.46 0.0599976 63.05 0.840001 68.51 2.4C73.97 3.96 79.43 5.95333 84.89 8.38Z"
                />
                <motion.path
                    variants={svgAnimation}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: 'easeInOut' },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                    d="M44.7489 100.042C44.7489 93.9751 45.4422 88.0384 46.8289 82.2317C48.3022 76.3384 50.3389 70.7917 52.9389 65.5917C55.5389 60.3051 58.6156 55.4951 62.1689 51.1617C65.8089 46.7417 69.7522 42.9284 73.9989 39.7217C78.3322 36.5151 82.9256 34.0451 87.7789 32.3117C92.6322 30.4917 97.6156 29.5817 102.729 29.5817C108.709 29.5817 113.346 30.8384 116.639 33.3517C120.019 35.8651 121.709 39.3751 121.709 43.8817C121.709 45.6151 121.449 47.3917 120.929 49.2117C120.496 51.0317 119.802 52.8517 118.849 54.6717C117.982 56.4051 116.942 58.0951 115.729 59.7417C114.516 61.3884 113.172 62.8184 111.699 64.0317C109.446 63.6851 107.496 62.6884 105.849 61.0417C104.202 59.3084 103.162 57.3151 102.729 55.0617C105.762 52.5484 108.146 49.9484 109.879 47.2617C111.699 44.4884 112.609 41.9751 112.609 39.7217C112.609 35.9084 110.226 34.0017 105.459 34.0017C103.466 34.0017 101.386 34.4351 99.2189 35.3017C97.1389 36.0817 95.0156 37.2084 92.8489 38.6817C90.6822 40.1551 88.5589 41.9317 86.4789 44.0117C84.4856 46.0917 82.6222 48.3884 80.8889 50.9017C68.8422 68.2351 62.8189 85.9584 62.8189 104.072C62.8189 110.485 63.8156 115.642 65.8089 119.542C67.8022 123.442 70.4456 125.738 73.7389 126.432C77.4656 125.565 82.1889 123.182 87.9089 119.282C93.6289 115.382 99.8689 110.312 106.629 104.072C107.496 104.938 108.016 105.848 108.189 106.802C105.676 110.095 103.076 113.258 100.389 116.292C97.7022 119.325 95.0156 122.098 92.3289 124.612C89.7289 127.125 87.1289 129.335 84.5289 131.242C82.0156 133.148 79.6756 134.622 77.5089 135.662C66.7622 135.488 58.6156 132.412 53.0689 126.432C47.5222 120.452 44.7489 111.655 44.7489 100.042Z"
                />
            </motion.svg>

            {/* <svg
        width="122"
        height="136"
        viewBox="0 0 122 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M84.89 8.38C85.15 9.85334 85.3233 10.8933 85.41 11.5C85.5833 12.02 85.67 12.7567 85.67 13.71C85.67 16.57 85.02 19.2567 83.72 21.77C82.5067 24.1967 80.8167 25.93 78.65 26.97C76.9167 24.63 74.7933 22.6367 72.28 20.99C69.7667 19.2567 66.9933 17.87 63.96 16.83C61.0133 15.7033 57.9367 14.88 54.73 14.36C51.5233 13.84 48.4033 13.58 45.37 13.58C42.3367 13.58 39.4767 13.84 36.79 14.36C34.19 14.7933 31.85 15.4433 29.77 16.31C27.7767 17.09 26.1733 18.0867 24.96 19.3C23.8333 20.5133 23.27 21.9 23.27 23.46C23.53 25.3667 24.7 27.3167 26.78 29.31C28.86 31.2167 31.4167 33.1233 34.45 35.03C37.4833 36.85 40.82 38.67 44.46 40.49C48.1867 42.31 51.8267 44.0433 55.38 45.69C59.8 47.77 63.6133 49.72 66.82 51.54C70.0267 53.2733 72.67 55.2233 74.75 57.39C76.83 59.47 78.39 61.8533 79.43 64.54C80.47 67.2267 80.99 70.4767 80.99 74.29C80.99 78.71 80.2533 82.87 78.78 86.77C77.3067 90.5833 75.14 93.92 72.28 96.78C69.5067 99.64 66.1267 101.85 62.14 103.41C58.1533 105.057 53.69 105.88 48.75 105.88C43.8967 105.88 38.6533 105.143 33.02 103.67C27.3867 102.197 22.1 100.16 17.16 97.56C12.3067 95.0467 8.23334 92.1433 4.94001 88.85C1.73334 85.47 0.130005 81.9167 0.130005 78.19C0.130005 76.4567 0.606672 74.2467 1.56001 71.56C2.60001 68.8733 4.42001 66.0567 7.02001 63.11C7.28001 65.71 8.66667 68.7867 11.18 72.34C13.78 75.8933 17.6367 79.1867 22.75 82.22C27.5167 84.9933 32.4133 87.03 37.44 88.33C42.5533 89.5433 47.32 90.15 51.74 90.15C56.5933 90.15 60.5367 89.5433 63.57 88.33C66.6033 87.1167 68.9867 85.6867 70.72 84.04C72.4533 82.3067 73.6667 80.5733 74.36 78.84C75.0533 77.1067 75.4433 75.72 75.53 74.68C75.4433 72.9467 74.62 71.3 73.06 69.74C71.5867 68.0933 69.55 66.5333 66.95 65.06C64.4367 63.5 61.49 61.94 58.11 60.38C54.73 58.82 51.22 57.26 47.58 55.7C42.12 53.2733 37.3967 51.02 33.41 48.94C29.51 46.7733 26.26 44.6067 23.66 42.44C21.1467 40.1867 19.2833 37.8467 18.07 35.42C16.9433 32.9933 16.38 30.22 16.38 27.1C16.38 22.2467 17.8533 17.6533 20.8 13.32C23.7467 8.98667 27.9933 5.69333 33.54 3.44C36.3133 2.22667 39.26 1.36 42.38 0.839996C45.5867 0.319998 48.7067 0.0599976 51.74 0.0599976C57.46 0.0599976 63.05 0.840001 68.51 2.4C73.97 3.96 79.43 5.95333 84.89 8.38Z"
          fill="transparent"
        />
        <path
          d="M44.7489 100.042C44.7489 93.9751 45.4422 88.0384 46.8289 82.2317C48.3022 76.3384 50.3389 70.7917 52.9389 65.5917C55.5389 60.3051 58.6156 55.4951 62.1689 51.1617C65.8089 46.7417 69.7522 42.9284 73.9989 39.7217C78.3322 36.5151 82.9256 34.0451 87.7789 32.3117C92.6322 30.4917 97.6156 29.5817 102.729 29.5817C108.709 29.5817 113.346 30.8384 116.639 33.3517C120.019 35.8651 121.709 39.3751 121.709 43.8817C121.709 45.6151 121.449 47.3917 120.929 49.2117C120.496 51.0317 119.802 52.8517 118.849 54.6717C117.982 56.4051 116.942 58.0951 115.729 59.7417C114.516 61.3884 113.172 62.8184 111.699 64.0317C109.446 63.6851 107.496 62.6884 105.849 61.0417C104.202 59.3084 103.162 57.3151 102.729 55.0617C105.762 52.5484 108.146 49.9484 109.879 47.2617C111.699 44.4884 112.609 41.9751 112.609 39.7217C112.609 35.9084 110.226 34.0017 105.459 34.0017C103.466 34.0017 101.386 34.4351 99.2189 35.3017C97.1389 36.0817 95.0156 37.2084 92.8489 38.6817C90.6822 40.1551 88.5589 41.9317 86.4789 44.0117C84.4856 46.0917 82.6222 48.3884 80.8889 50.9017C68.8422 68.2351 62.8189 85.9584 62.8189 104.072C62.8189 110.485 63.8156 115.642 65.8089 119.542C67.8022 123.442 70.4456 125.738 73.7389 126.432C77.4656 125.565 82.1889 123.182 87.9089 119.282C93.6289 115.382 99.8689 110.312 106.629 104.072C107.496 104.938 108.016 105.848 108.189 106.802C105.676 110.095 103.076 113.258 100.389 116.292C97.7022 119.325 95.0156 122.098 92.3289 124.612C89.7289 127.125 87.1289 129.335 84.5289 131.242C82.0156 133.148 79.6756 134.622 77.5089 135.662C66.7622 135.488 58.6156 132.412 53.0689 126.432C47.5222 120.452 44.7489 111.655 44.7489 100.042Z"
          fill="transparent"
        />
      </svg> */}

            {/* Main heading */}
            <div className={classes.main__heading}>
                <motion.span
                    variants={headingAnimantion}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    Hello, I'm
                </motion.span>
                <motion.h1
                    variants={headingAnimantion}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    Srdjan Colovic
                </motion.h1>
                <motion.h2
                    variants={headingAnimantion}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7, duration: 0.7 }}
                >
                    Frontend Developer
                </motion.h2>
                <motion.div
                    variants={landingBtnAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    <Link smooth to="/#about" className={classes.btn}>
                        About me
                    </Link>
                </motion.div>
            </div>

            {/* Social icons */}
            <motion.div
                variants={socialIconsLandingPageAnimation}
                initial="hidden"
                animate="visible"
                className={classes['main__social-icons']}
            >
                <SocialIcon href="https://www.facebook.com/srdjancolovic95">
                    <BsFacebook />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/srdjan_colovic/">
                    <SiInstagram />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/srdjan-colovic-1252971bb?original_referer=https%3A%2F%2Fsrdjancolovic.com%2F">
                    <ImLinkedin2 />
                </SocialIcon>
            </motion.div>
        </div>
    );
};

export default Landing;
