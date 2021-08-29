const Input = ({ searchValue, ...props }) => {

  return <input onChange={(e) => searchValue(e.target.value)} {...props} />;
};

export default Input;