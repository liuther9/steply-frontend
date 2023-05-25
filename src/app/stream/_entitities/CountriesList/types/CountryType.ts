export interface ICountryStep {
	id: number | string
	title: string
	live: boolean
	status?: 'completed' | 'in_progress'
}

export interface ICountryTracker {
	id: number
	name: string
	title: string
	steps: ICountryStep[]
}
