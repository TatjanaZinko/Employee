import { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext({
    employees: [],
});

export const EmployeeProvider = ({children}) => {
    const [employees, setEmployees] = useState([]);  
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((employees) => setEmployees(employees));
    }, [])

    const value = { employees };    

    return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>
}