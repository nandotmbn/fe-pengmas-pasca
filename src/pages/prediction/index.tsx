import dynamic from "next/dynamic";

const DynamicPrediction = dynamic(() => import('@/views/prediction/Prediction'), {
  loading: () => <p>Loading...</p>,
	ssr: false
})

export default function PredictionForm() {
	return (
		<>
			<DynamicPrediction />
		</>
	);
}
