import {TUser} from 'models';
import {createContext} from 'react';
const UserContext = createContext<TUser>({
	email: '',
	password: '',
	login: false,
	searching: false,
	setUser: () => {},
});

export default UserContext;
