// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Samuel",
    lastName: "Gideon",
    age: 82,
    location: "Ekiti"
}

const student2: Student = {
    firstName: "Joseph",
    lastName: "Ajones",
    age: 11,
    location: "adoEkiti"
}

let studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameRow  = row.insertCell();
    const locationRow = row.insertCell();
    firstNameRow.textContent = student.firstName;
    locationRow.textContent = student.location;
})
