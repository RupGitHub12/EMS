
import { useState } from 'react'
import EmployeeGrid from '../components/employee-grid'
import Sidebar from '../components/sidebar'
import { Navigate } from 'react-router-dom'

const EmployeeList = () =>{

	const getLocalStorage = () => {
	  let list = localStorage.getItem('emp-list');
	  // console.log(list);
	  if (list) {
	    return (list = JSON.parse(localStorage.getItem('emp-list')));
	  } else {
	    return [];
	  }
	};

	const [list, setList] = useState(getLocalStorage());
	
	const token = localStorage.getItem('token');
	if(token == null){
		return <Navigate to='/login'/>
	}
	console.log(list)
	console.log(list.length)
	return(
			<div className='emplistcontainer'>
				<Sidebar/>
				<div className='emplist'>
					<div className='form'>
					{list.length>0 ?
						<EmployeeGrid/>:
						<h1 className='center'>No Employee</h1>
					}
					</div>
				</div>
				
			</div>
		)
}

export default EmployeeList;

