
const ValidateLogin = (email, psw) => {
	
	// const [user, setUser] = useState([
	// 	{email : 'test@gmail.com',
	// 	psw : 'Test@123'},
	// ]);

	const user = {
			firstUser : {
				userName : 'test@gmail.com',
				password : 'Test@123'
			},
		};

	console.log(user.firstUser.userName)
	if(email === user.firstUser.userName && psw === user.firstUser.password){
		//console.log('logged in!');
		return true;
	}
	else{
		//console.log('cannot find account');
		return false;
	}
}

export default ValidateLogin;