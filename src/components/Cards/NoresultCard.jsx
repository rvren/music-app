
import Lottie from "react-lottie";
import animationData from '../../assets/lottie/noresults.json';

function NoresultCard() {
  const defaultOptions = {
		loop: true,
		autoplay: true, 
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};
	return (
	<Lottie options={defaultOptions}
		height={'40%'}
		width={'40%'}
		isStopped={false}
		isPaused={false}/>)
};

export default NoresultCard;
