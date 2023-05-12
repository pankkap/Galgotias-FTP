

let btn = document.querySelector('button');
// console.log(btn)
var name, age, roll

btn.onclick = function(e){
    e.preventDefault()
    console.log("btn clicked")
    console.log("Function Called")

    name = document.getElementById('name').value
    console.log(name)

    age= document.getElementById('age').value
    console.log(age)

    roll = document.getElementById('roll').value
    console.log(roll)

}

//ES6 Class concept
class Employee {
    constructor(name, age, salary=0) {
        this.name = name
        this.age = age
        this.salary = salary
    }
        display() {
            console.log(`Name: ${this.name}\nAge: ${this.age}\nSalary: ${this.salary}`)
        }
    }

// let obj1 = new Employee("Sachin", 24, 10000)
// obj1.display()

class Student extends Employee{
    constructor(name, age, salary, rollno) {
        super(name, age,salary)
        this.rollno = rollno
    }
    Details(){
        console.log(`Rollno: ${this.rollno}`)
        super.display()
    }
}

let stu1 = new Student(name, age, 101,roll)
stu1.Details()