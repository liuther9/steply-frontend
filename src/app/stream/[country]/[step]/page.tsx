import { NextPage } from 'next'

const CountryStepPage: NextPage<{ params: { country: string; step: number } }> = ({ params: { step, country } }) => {
	return (
		<div>
			{country} {step}
		</div>
	)
}

export default CountryStepPage
