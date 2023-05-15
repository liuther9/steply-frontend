import { NextPage } from 'next'
import s from '../strim/page.module.scss'
import { Text, Title } from '@/shared/components'
import TextInputStrim from './_components/TextInput'

const Strim: NextPage = () => {
	return (
		<section className={s.StrimSection}>
			<div className={s.strimWrap}>
				<Title ta='left'>Стримы</Title>
				<Text color='light' size='sm' ta='left'>
					Смотрите обучающие стримы от квалифицированных преподователей
				</Text>
			</div>
			<TextInputStrim />
		</section>
	)
}

export default Strim
