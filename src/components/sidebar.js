import { Navigate, Link } from 'react-router-dom'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {CgUserList} from 'react-icons/cg'
import {MdDashboard } from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'

const Sidebar = () =>{
		const logOut = () =>{
			localStorage.removeItem('token');
			<Navigate to = '/login'/>
		}

	return(
			<>
				<div className='dashboardSidebar' >
					<ul>
						<li className='catagory'>
							<MdDashboard/>
							<a href='/'>Dashboard</a>
						</li>
						<li className='catagory'>
							<AiOutlineUserAdd/>
							<a href='/add-user'>Add Employee</a>
						</li>
						<li className='catagory'>
							<CgUserList />
							<a href='/employee-list'>Employee List</a>
						</li>
						<li className='catagory'>
							<BsSearch/>
							<a href='/search-employee'>Search Employee</a>
						</li>
						<li className='catagory'>
							<BiLogOut/>
							<Link to = '/login' className='catagory' onClick = {logOut}>LogOut</Link>
						</li>
					</ul>
				</div>
			</>
		)
}

export default Sidebar;