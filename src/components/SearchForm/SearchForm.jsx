import css from './SearchForm.module.css';

const SearchForm = ({ onFormSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      return;
    }
    onFormSubmit(query);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="query" autoFocus placeholder="Find a movie..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
