
const validate = (email, psw) =>{
	let error = {

	}
	

	if(!email){
		error.email = "Email is required!"
	}
	else if(!psw){
		error.psw = "password is required!"
	}
	else if(psw.length<8){
		error.psw = "password must be at least of 8 characters!"
	}
	else if(psw === psw.toLowerCase()){
		error.psw = "password must contain at least one uppercase letter!"
	}
	else if(!psw.match(/\W/)){
		error.psw = "password must contain at least one special character!"
	}
    
	return error;
}

export default validate;


// if (email && psw) {
//       // console.log('Email exists')
//       if(psw.length<8 || psw === psw.toLowerCase() || !psw.match(/\W/)){
//         console.log('too short')
//       }
//     }

//      else {
//       console.log('empty');
      
//     }