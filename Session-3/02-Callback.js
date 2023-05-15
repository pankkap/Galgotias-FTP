var students = [
    {name:"Manish", class: "5th"},
    {name:"Sachin", class: "6th"},
]


var newStudent = {name:"Vinod", class:"10th"}


function admitStudent(stu, callback)
{
    setTimeout(() => {
        students.push(stu)
        callback()

    }, 2000);
}

function displayStudents(){
    setTimeout(() => {
        
        var str = ""
    students.forEach((i)=>{
        str = str + i.name + " "
    })
    console.log((str))

    }, 1000);
}



admitStudent(newStudent, displayStudents)
