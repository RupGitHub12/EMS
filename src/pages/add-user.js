import {useState, useEffect} from 'react'
import { Navigate,  useLocation} from 'react-router-dom'
import Alert from '../components/alert'
import Sidebar from '../components/sidebar'

const AddEmployee = () =>{

	const getLocalStorage = () => {
	  let emplist = localStorage.getItem('emp-list');
	  // console.log(emplist);
	  if (emplist) {
	    return (emplist = JSON.parse(localStorage.getItem('emp-list')));
	  } else {
	    return [];
	  }
	};
	const {state} = useLocation();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emplist, setEmpList] = useState(getLocalStorage());
	const [alert, setAlert] = useState({ show: false, type: '', msg: '' });
	const [isEditing, setIsEditing] = useState(false);
	const [isEdited, setIsEdited] = useState(false);
	const [editID, setEditID] = useState(null);

	const token = localStorage.getItem('token');
	

	useEffect(()=>{
		if(state != null){
			// console.log('hello')
			const specificEmployee = emplist.find((item) => item.eid === state.id);
			// console.log(specificEmployee);
	    setIsEditing(true);
	    setEditID(state.id);
	    setName(specificEmployee.ename);
	    setEmail(specificEmployee.eid);
		}
	},[state])


	useEffect(() => {
    localStorage.setItem('emp-list', JSON.stringify(emplist));
  }, [emplist]);

  if(token == null){
		return <Navigate to='/login'/>
	}

	// if(isEdited){
  //   	return <Navigate to='/employee-list'/>
  // }
	const showAlert = (show = false, type = '', msg = '') => {
	    setAlert({ show, type, msg });
	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		    if (!name || !email) {
		      showAlert(true, 'danger', 'please enter details');
		    } else if (name && isEditing) {
			      setEmpList(
			        emplist.map((item) => {
			          if (item.eid === editID) {
			            return { ...item, ename: name, eid : email };
			          }
			          return item;
			        })
			      );
			      setName('');
			      setEmail('');
			      setEditID(null);
			      setIsEditing(false);
			      showAlert(true, 'success', 'Employee details changed');
			      setIsEdited(true);
		    } else {
			      showAlert(true, 'success', 'employee added to the list');
			      const newEmp = { eid: email, ename: name };

			      setEmpList([...emplist, newEmp]);
			      setName('');
			      setEmail('');
			      setIsEdited(true);
		    }
	};
	
	return(
		<div className='addemployeecontainer'> 
				<Sidebar/>
				<div className='addemployee'>
			    <div className=' form'>
		      		<form onSubmit={handleSubmit}>
		      		{isEditing ? <h3 className= 'center'>Update Employee Details</h3> : <h3 className= 'center'>Add Employee</h3>}
			        <div className='form-control'>
			          	<input
				            type='text'
				            placeholder='Enter name'
				            value={name}
				            onChange={(e) => setName(e.target.value)}
			          	/>
			         </div>
			         <div className='form-control'>
			          	<input
				            type='email'
				            className='emp-id'
				            placeholder='Enter employee email'
				            value={email}
				            onChange={(e) => setEmail(e.target.value)}
			          	/>
			         </div>
			         {alert.show && <Alert {...alert} removeAlert={showAlert} empList={emplist} />}
		          <button type='submit' className='submit-btn'>
		            {isEditing ? 'Update' : 'Add Employee'}
		          </button>
		        
		      </form>
		    </div>
	    </div>
		</div>)
}

export default AddEmployee;