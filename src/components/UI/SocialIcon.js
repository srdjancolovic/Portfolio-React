import classes from './SocialIcon.module.scss';

const SocialIcon = ({ href, className, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes['social-icon']} ${className}`}
    >
      {children}
    </a>
  );
};

export default SocialIcon;
