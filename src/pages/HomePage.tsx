import React from 'react';
import { connect } from 'react-redux';

interface EmployeeProps {
  employee: [];
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    to?: string;
  }
}

function HomePage(props: EmployeeProps) {

  const employees = props.employee;

  employees.map((employee: {id: number, name: string})  => {
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

const mapStateToProps = (state:any) => {
  return {
    employee: state.employee
  }  
}

//export default connect(mapStateToProps)(HomePage)