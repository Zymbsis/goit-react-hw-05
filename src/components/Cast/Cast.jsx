import { defaultImg, pathToImg } from '../../services/default';
import css from './Cast.module.css';

const Cast = ({ movie: { profile_path, name, character, popularity } }) => {
  return (
    <>
      <div className={css.imgWrapper}>
        <img
          src={profile_path ? `${pathToImg}${profile_path}` : defaultImg}
          alt={name}
        />
      </div>
      <div className={css.textWrapper}>
        <h2>{name}</h2>
        <p>Character: {character}</p>
        <p>Rating: {Math.round(popularity * 10) / 10}</p>
      </div>
    </>
  );
};

export default Cast;
