import { NextPage } from 'next'
import s from './page.module.scss'
import { Text, Title } from '@/shared/components'
import SearchBar from './_components/SearchBar'

const Stream: NextPage = () => {
	return (
		<section className={s.StrimSection}>
			<div className={s.strimWrap}>
				<Title ta='left'>Стримы</Title>
				<Text color='light' size='sm' ta='left'>
					Смотрите обучающие стримы от квалифицированных преподователей
				</Text>
			</div>
			<SearchBar />
		</section>
	)
}

export default Stream
