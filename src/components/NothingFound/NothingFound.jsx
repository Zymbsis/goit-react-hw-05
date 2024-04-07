import nothingFound from '../../img/nothing-found.png';
import css from './NothingFound.module.css';

const NothingFound = () => {
  return (
    <div className={css.nothingFoundWrapper}>
      <img
        className={css.nothingFoundImg}
        src={nothingFound}
        alt="No results found"
        width={367}
        height={679}
      />
      <div className={css.nothingFoundText}>
        <h2>No matching results found</h2>
        <p>Please try a different search query.</p>
      </div>
    </div>
  );
};

export default NothingFound;
