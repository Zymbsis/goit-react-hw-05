import css from './Review.module.css';

const Review = ({ movie: { author, content } }) => {
  return (
    <>
      <h3 className={css.title}>{author}</h3>
      <p className={css.text}>{content}</p>
    </>
  );
};

export default Review;
