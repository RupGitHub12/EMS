import React from 'react'

export default function SingleEmp ({id, name, job, image}){
	return (
    <div className='emp'>
     	<img src={image} alt={name} />
      	<div className='emp-footer'>
	        <h3>{name}</h3>
	        <h4>{job}</h4>
      	</div>
    </div>
  )
}