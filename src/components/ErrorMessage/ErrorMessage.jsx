import css from './ErrorMessage.module.css';
import errorMessage from '../../img/error-message.png';
const ErrorMessage = () => {
  return (
    <div className={css.errorMessageWrapper}>
      <img
        className={css.errorMessageImg}
        src={errorMessage}
        alt="Bad request"
        width={1000}
        height={1254}
      />
      <div className={css.errorMessageText}>
        <h2>Oops! It looks like something went wrong</h2>
        <p>Please reload your page or try again later.</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
