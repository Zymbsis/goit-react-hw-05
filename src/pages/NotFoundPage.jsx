import { Link } from 'react-router-dom';
import notFoundImg from '../img/page-not-found.png';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className="section">
      <div className={`${css.notFoundContainer} + container`}>
        <img
          className={css.notFoundImg}
          src={notFoundImg}
          alt="This page not found"
          width={250}
          height={370}
        />
        <div className={css.notFoundTextWrapper}>
          <h2>Oops! Page not found.</h2>
          <p>
            You must have picked the wrong door because I haven`t been able to
            lay my eyes on the page you`ve been searching for.
          </p>
          <Link className={css.notFoundLink} to={'/'}>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
