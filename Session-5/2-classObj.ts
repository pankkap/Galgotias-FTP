// Access Specifier
// 1. public
// 2. private
// 3. protected

export abstract class Employee{
    //properties
    // Public data by Default
    protected empId:number
    protected empName:string

    //constructor
    constructor(id:number, name:string)
    {
        this.empId = id
        this.empName = name
    }

    //abstract function
     abstract details():void;
}

// let emp1 = new Employee(123, "Sachin")
// let emp2 = new Employee(423, "Sachin")
// emp1.details()
// emp2.empName = "Manish" // private
// emp2.details()

// let employees:Employee[] = [];
// employees.push("Pankaj")
// employees.push(emp1)
// employees.push(emp2)
// console.log(employees)















export const message = "Hello Friends"





