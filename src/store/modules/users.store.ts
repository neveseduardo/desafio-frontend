import { defineStore } from 'pinia';

interface UserStore {
	loading: boolean,
	collection: any[],
	pagination: { total: number, per_page: number, page: number },
	filter: { name: string, email: string, date: string },
}

export const useDetailsStore = defineStore('detailsStore', {
	state: (): UserStore => ({
		loading: false,
		collection: [],
		pagination: {
			total: 0,
			per_page: 20,
			page: 1,
		},
		filter: {
			name: '',
			email: '',
			date: '',
		},
	}),
	getters: {
		queriedCollection: (state) => {
			return state.collection;
		},
	},
	actions: {
		/**
		 * Função que realiza o fetch dos dados necessários para carregar o módulo
		 *
		 * @param params
		 */
		async getUserModuleData(params: any) {
			try {
				this.loading = true;

				//

			} catch (error) {
				console.error(error);
			} finally {
				this.loading = false;
			}
		},
	},
});
