import classes from './Input.module.scss';
const Input = ({
  text,
  placeholder,
  name,
  onChange,
  onBlur,
  value,
  className,
}) => {
  return (
    <div className={`${classes['form-input']} ${className}`}>
      <input
        type={text}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};

export default Input;
