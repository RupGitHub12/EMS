import React from 'react'
import { Navigate } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Content from '../components/content'

const DashBoard = () => {
	
	const token = localStorage.getItem('token');
	if(token == null){
		return <Navigate to='/login'/>
	}


	return(
		<div className='dashboardContainer'>
			<Sidebar />
			<Content />
		</div>
		)

}

export default DashBoard;