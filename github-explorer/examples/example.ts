type User = {
	name: string 
	email: string
	address: {
		city: string
		state?: string
	}
}

function showWelcomeMessage(user: User) {
	return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

// showWelcomeMessage('teste') // Error
const user = {
	name: 'jordy',
	email: 'jordy@gmail.com',
	address: {
		city: 'New York',
		state: 'NY'
	}
}
showWelcomeMessage(user)