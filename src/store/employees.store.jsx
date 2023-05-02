import { observable, action } from "mobx";

export const employeesStore = observable({
    employee: [],
    
    fetchData: action(async function() {
      return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json());
    })
});


