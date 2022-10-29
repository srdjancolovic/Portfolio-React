//*Landing page animations
const headingVariants = {
    hidden: { marginLeft: '-100%', opacity: 0 },
    visible: {
        marginLeft: '0px',
        opacity: 1,
    },
};

//*Landing page btn
const btnVariants = {
    hidden: { marginTop: '50%', opacity: 0 },
    visible: {
        marginTop: '0px',
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 0.7,
        },
    },
};

//*Hamburger menu
const hamburgerAnimVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.8,
            duration: 0.7,
        },
    },
};

//*Social icon
const socialIconsVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 2.5,
        },
    },
};

//*SVG Animation
const svgVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: 'rgba(255, 255, 255, 1)',
    },
};

//*FadeInUp
const fadeInUp = {
    initial: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.7,
        },
    },
    viewport: {
        once: true,
        amount: 0.35,
    },
};

//*Fade in left
const fadeInLeft = {
    initial: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
        },
    },
    viewport: {
        once: true,
        amount: 0.35,
    },
    smallerViewport: {
        once: true,
        amount: 0,
    },
};

//*Projects animations

//Fade
const contentContainerVariants = {
    initial: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
    exit: {
        opacity: 0,
        x: 50,
        transition: { ease: 'easeIn' },
    },
};
//Single item i websites/apps container animations
const singleItemVariants = {
    initial: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
    viewport: {
        once: true,
        amount: 0.35,
    },
};
export const headingAnimantion = headingVariants;
export const landingBtnAnimation = btnVariants;
export const socialIconsLandingPageAnimation = socialIconsVariants;
export const svgAnimation = svgVariants;
export const fadeInUpAnim = fadeInUp;
export const fadeInLeftAnim = fadeInLeft;
export const projectsContainerAnimInOut = contentContainerVariants;
export const singleProjectAnim = singleItemVariants;
export const hamburgerAnim = hamburgerAnimVariants;
