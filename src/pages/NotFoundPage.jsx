import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import notFoundImg from '../img/page-not-found.png';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (timer === 10) {
    navigate('/', { replace: true });
  }

  return (
    <section className="section">
      <div className={clsx(css.notFoundContainer, 'container')}>
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
          <span className={css.timer}>
            or you will be automatically redirected to the home page in{' '}
            {10 - timer} seconds
          </span>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
