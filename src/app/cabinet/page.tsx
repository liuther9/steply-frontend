import { NextPage } from 'next'
import { BiCoin } from 'react-icons/bi'

import { Button, Text, Title } from '@/shared/components'

import { BlockContainer } from './_components/BlockContainer'
import Card from './_components/CountryCard'
import Document from './_components/Document'
import { Publication } from './_components/Publication/index'
import s from './page.module.scss'
const data = [
	{
		id: 1,
		cityName: 'Чехия',
	},

	{
		id: 2,
		cityName: 'Профориентация',
	},
	{
		id: 3,
		cityName: 'Германия',
	},
	{
		id: 4,
		cityName: 'Турция',
	},
]

const document = [
	{
		id: 1,
		titleDocument: 'Атестат',
	},

	{
		id: 2,
		titleDocument: 'Атестат',
	},
	{
		id: 3,
		titleDocument: 'Атестат',
	},
	{
		id: 4,
		titleDocument: 'Атестат',
	},
	{
		id: 5,
		titleDocument: 'Атестат',
	},

	{
		id: 6,
		titleDocument: 'Атестат',
	},
]

export const revalidate = 0

const Cabinet: NextPage = () => {
	return (
		<section className={s.section}>
			<div className={s.wrapper}>
				<Title ta='left'>{'User Name'}</Title>
				<div className={s.divWrapper}>
					<BiCoin />
					<Text mb='mb_none' size='sm'>
						{'17 741 steplycoin'}
					</Text>
				</div>
				<div className={s.buttonWrapper}>
					<Button variant='purple'>Пройти анкету</Button>
				</div>
			</div>
			<BlockContainer title='Домашние работы'>
				{data.map((i) => (
					<Card cityName={i.cityName} key={i.id} />
				))}
			</BlockContainer>
			<BlockContainer title='Мои публикации'>
				{data.map((i) => (
					<Publication key={i.id} />
				))}
			</BlockContainer>
			<BlockContainer title='Ваши документы'>
				{document.map((i) => (
					<Document key={i.id} titleDocument={i.titleDocument} />
				))}
			</BlockContainer>
		</section>
	)
}

export default Cabinet
