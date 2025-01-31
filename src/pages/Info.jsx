import IsEvenAPI from "../components/IsEvenAPI";
import AdviceSlipAPI from "../components/AdviceSlipAPI.jsx";
import ThirdAPI from "../components/ThirdAPI.jsx";

function Info() {
	return (
		<div className="w-full h-full p-[40px] pt-[10px] md:pt-[40px] API-grid text-black dark:text-white">
			<IsEvenAPI></IsEvenAPI>
			<AdviceSlipAPI></AdviceSlipAPI>
			<ThirdAPI></ThirdAPI>
		</div>
	);
}

export default Info;
