import axios from '@/services/http.service';

export const useUsersHttp = ({
	getAllUsers: (params: any = {}) => axios.get('/users', { params }),
	postCreateUser: (payload: any = {}) => axios.post('/users', payload),
	putUpdateUser: (uid: string, payload: any = {}) => axios.put(`/users/${uid}`, payload),
	deleteDeleteUser: (uid: string) => axios.delete(`/users/${uid}`),
});
