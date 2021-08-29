import {Input} from '../components/Fields'

const Searchbar = ({ value, ...props }) => {

  return (
		<Input {...props}/>
  );
};

export default Searchbar;