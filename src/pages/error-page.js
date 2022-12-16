import React from 'react'
import { Link } from 'react-router-dom';


const ErrorPage = () =>{
	return(
		<>
			<h1 className='center'>Page does not exist!</h1>
      		<Link to='/'>
        		<button className='submit-btn' style={{ width: 'fit-content',display:'flex', margin: '20px auto'}}> Return to Dashboard </button>
      		</Link>
		</>
		)
}

export default ErrorPage;