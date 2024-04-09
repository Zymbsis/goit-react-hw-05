import { DNA } from 'react-loader-spinner';

const Loader = () => {
  return (
    <DNA
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{ display: 'block', margin: '0 auto' }}
      wrapperClass="dna-wrapper"
    />
  );
};

export default Loader;
