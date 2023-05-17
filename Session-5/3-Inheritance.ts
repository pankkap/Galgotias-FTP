import {Employee} from './2-classObj'

class Department extends Employee
{
    private salary:number
    constructor(id:number, name:string, salary:number)
    {
        super(id, name)
        this.salary = salary
    }
    details(): void {
       console.log(`Employee Id: ${this.empId}\nEmployee Name: ${this.empName}`)
    }
    getSalary():void{
        
        console.log("Salary: ", this.salary)
    }
}

let dept1 = new Department(101, "Rahul", 10000)
dept1.details()
dept1.getSalary()
