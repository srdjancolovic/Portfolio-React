import classes from './Contact.module.scss';
import inputStyles from '../../components/Input/Input.module.scss';
import SocialIcon from '../../components/UI/SocialIcon';
import logo from '../../assets/NewLogoSC.svg';

import emailjs from '@emailjs/browser';

import { BsFacebook } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { ImLinkedin2 } from 'react-icons/im';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useRef, useState } from 'react';

import useInput from '../../hooks/use-input';
import Input from '../../components/Input/Input';

const Contact = () => {
  const form = useRef();
  const [showMsg, setShowmsg] = useState(false);
  const [showMsgErr, setShowMsgErr] = useState(false);

  const {
    value: nameInput,
    isValid: nameInputIsValid,
    hasError: nameInputIsInvalid,
    valueChangetHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetValues: resetNameValue,
  } = useInput((value) => value.trim().split(' ').length >= 2);

  const {
    value: emailInput,
    isValid: emailInputIsValid,
    hasError: emailInputIsInvalid,
    valueChangetHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetValues: resetEmailValue,
  } = useInput((value) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      return true;
    } else {
      return false;
    }
  });

  const {
    value: messageInput,
    isValid: messageInputIsValid,
    hasError: messageInputIsInvalid,
    valueChangetHandler: messageInputHandler,
    inputBlurHandler: messageInputBlurHandler,
    resetValues: resetMessageValue,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid && messageInputIsValid) {
    formIsValid = true;
  }

  const sendEmailHandler = (e) => {
    e.preventDefault();

    if (!nameInputIsValid) {
      return;
    }

    emailjs
      .sendForm(
        'service_yvlh2ct',
        'template_yalnbll',
        form.current,
        'Sm_VrvDYpHtRF4Jqf'
      )
      .then(
        setShowmsg(true),
        setTimeout(() => {
          setShowmsg(false);
        }, 3000),
        (result) => {
          console.log(result.text);
        },
        (error) => {
          setShowMsgErr(true);
          console.log(error.text);
        }
      );
    e.target.reset();

    resetNameValue();
    resetEmailValue();
    resetMessageValue();
  };
  const nameInputClassesSuccess = nameInputIsValid
    ? inputStyles['form-input--valid']
    : inputStyles['form-input'];
  const nameInputClasses = nameInputIsInvalid
    ? inputStyles['form-input--error']
    : inputStyles['form-input'];

  const emailInputClassesSuccess = emailInputIsValid
    ? inputStyles['form-input--valid']
    : inputStyles['form-input'];

  const emailInputClasses = emailInputIsInvalid
    ? inputStyles['form-input--error']
    : inputStyles['form-input'];

  const messageInputClassesSuccess = messageInputIsValid
    ? inputStyles['form-input__textarea--valid']
    : inputStyles['form-input'];

  const messageInputClasses = messageInputIsInvalid
    ? inputStyles['form-input__textarea--error']
    : inputStyles['form-input'];

  return (
    <section
      id="contact"
      className={`${classes.contact} ${classes.container} `}
    >
      <div className={classes['contact__info-icons']}>
        <h2>Let's get in touch</h2>
        <div className={classes.contact__icons}>
          <SocialIcon href="https://www.facebook.com/srdjancolovic95">
            <BsFacebook />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/srdjan_colovic/">
            <SiInstagram />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/srdjan-colovic-1252971bb?original_referer=https%3A%2F%2Fsrdjancolovic.com%2F">
            <ImLinkedin2 />
          </SocialIcon>
        </div>
        <div className={classes.contact__info}>
          <div
            className={`${classes['contact__info-tel']} ${classes['contact__info-item']}`}
          >
            <BsPhone className={classes['contact__info-item-icon']} />
            <a href="tel:+38765245302"> +387 65 245 302</a>
          </div>
          <div
            className={`${classes['contact__info-mail']} ${classes['contact__info-item']}`}
          >
            <HiOutlineMail className={classes['contact__info-item-icon']} />
            <p>colovicsrdjan@yahoo.com</p>
          </div>
        </div>
        <img
          src={logo}
          alt="Logo"
          className={`${classes.contact__logo} ${classes['contact__logo--top']}`}
        />
      </div>
      <div className={classes.contact__form}>
        <form ref={form} onSubmit={sendEmailHandler}>
          <Input
            className={` ${nameInputClasses} ${nameInputClassesSuccess}`}
            type="text"
            placeholder={
              nameInputIsInvalid ? 'Please enter your full name' : 'Your name'
            }
            name="name"
            onChange={nameInputHandler}
            onBlur={nameInputBlurHandler}
            value={nameInput}
          />
          <Input
            className={`${emailInputClasses} ${emailInputClassesSuccess}`}
            type="email"
            placeholder={
              emailInputIsInvalid ? 'Please enter your email' : 'Your email'
            }
            name="email"
            onChange={emailInputHandler}
            onBlur={emailInputBlurHandler}
            value={emailInput}
          />

          <div
            className={`${inputStyles['form-input']} ${messageInputClasses} ${messageInputClassesSuccess}`}
          >
            <textarea
              type="text"
              placeholder={
                messageInputIsInvalid
                  ? 'This field cannot be empty!'
                  : 'Your message'
              }
              name="message"
              onChange={messageInputHandler}
              onBlur={messageInputBlurHandler}
              value={messageInput}
            />
          </div>
          <button type="submit" className={classes.btn} disabled={!formIsValid}>
            Send email
          </button>
          {showMsg && (
            <p
              className={
                showMsg
                  ? classes['contact__hint-msg']
                  : classes['contact__hint-msg--error']
              }
            >
              {showMsg && !showMsgErr && 'Email sent successfully!'}
              {showMsg && showMsgErr && 'Something went wrong, try again!'}
            </p>
          )}
        </form>
        <img
          src={logo}
          alt="Logo"
          className={`${classes.contact__logo} ${classes['contact__logo--bottom']}`}
        />
      </div>
    </section>
  );
};

export default Contact;
