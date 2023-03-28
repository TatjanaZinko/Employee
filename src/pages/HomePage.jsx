import React from 'react';
import { connect } from 'react-redux';

function HomePage(props) {

  const employees = props.employee;

  employees.map((employee)  => {
    console.log(employee);
    return(
      <div key={employee.id}>
        <link to={`/ + employee.id`}>
          <span>{employee.name}</span>
        </link>
      </div>
    )
  })
   
} 

const mapStateToProps = (state) => {
  return {
    employee: state.employee
  }  
}

export default HomePage;

//export default connect(mapStateToProps)(HomePage)