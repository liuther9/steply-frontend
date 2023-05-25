import { Text, Title } from '@/shared/components'

import { ICountryTracker } from '../../types'
import { CountryTracker } from '../CountryTracker'
import { SearchBar } from '../SearchBar'
import s from './CountriesList.module.scss'

export const CountryList = ({ data }: { data: ICountryTracker[] }) => {
	return (
		<section>
			<div className={s.wrapper}>
				<Title ta='left'>Стримы</Title>
				<Text color='light' size='sm' ta='left'>
					Смотрите обучающие стримы от квалифицированных преподователей
				</Text>
			</div>
			<SearchBar />

			{data.map((item: ICountryTracker) => (
				<CountryTracker city={item} key={item.id} />
			))}
		</section>
	)
}
