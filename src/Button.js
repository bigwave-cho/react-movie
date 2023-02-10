import PropTypes from 'prop-types';
import styles from './Button.module.css';
//모듈적으로 css를 적용하는 방법

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

// proptypes를 이용하여 prop 타입 지정해주기
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
