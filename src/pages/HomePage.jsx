import { useState, useEffect } from 'react';
import { employeesStore } from '../store/employees.store';

const HomePage = () => {
  
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeesStore.fetchData().then((employees) => {
      setEmployees(employees);
    });
  }, []);  
 
  return(
    <div className='employee-container'>
      {employees.map((employee)  => {
        const {id, name, email } = employee
        return(
          <div key={id}>
              <img
                alt={`employee ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
        )
      })}
    </div>
  )
} 

export default HomePage;