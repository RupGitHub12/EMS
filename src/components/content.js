import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Legend, Tooltip } from 'recharts';
import topEmployees from './top-emp-data'
import SingleEmp from './single-emp'

const Content = () =>{
	const data = [
		{name: 'Beginner employees', value: 12},
		{name: 'Intermediate employees', value: 9},
		{name: 'Expert employees', value: 5},
	];
	const data1 = [
		{
		    name: 'Beginner',
		    Beginner: 12,
		  },
		{
		    name: 'Intermediate',
		    Intermediate: 9,
		  },
		 {
		    name: 'Expert',
		    Expert: 5,
		  },
		]

	return(
			<>
				<div className='dashboardContent'> 
					<h2 className='center'> Number of employees based on their skills </h2>
					<div className='chartContainer'>
				        <PieChart width={400} height={400} style={{flex:1}}>
				          <Pie
				            dataKey="value"
				            isAnimationActive={true}
				            data={data}
				            cx="50%"
				            cy="50%"
				            outerRadius={80}
				            fill="#8884d8"
				            label
				          />
				          <Tooltip />
				        </PieChart>

				        <BarChart
				          style={{flex:1}}
				          width={500}
				          height={300}
				          data={data1}
				          isAnimationActive={true}
				          margin={{
				            top: 5,
				            right: 30,
				            left: 20,
				            bottom: 5,
				          }}
				        >
				          <XAxis dataKey="name"/>
				          <YAxis />
				          <Tooltip />
				          <Legend />
				          <Bar dataKey="Beginner" fill="#8884d8" />
				          <Bar dataKey="Intermediate" fill="#82ca9d" />
				          <Bar dataKey="Expert" fill="#ffc658" />
				          
				        </BarChart>
				     </div>
			      
				    <div className='topEmp'>
				    	<h2 className='center'>Top 5 performers</h2>
				    	<div className='top-emp-container'>
				    		{topEmployees.map((item) => {
				    			console.log(item.id)
					          return <SingleEmp key={item.id} {...item} />

					        })}
				    	</div>
				    </div>
			    </div>
			</>
		)
}

export default Content;