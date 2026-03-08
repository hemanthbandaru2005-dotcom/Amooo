function addPatient(){

let name=document.getElementById("name").value;
let age=document.getElementById("age").value;
let disease=document.getElementById("disease").value;
let doctor=document.getElementById("doctor").value;

if(name==""||age==""||disease==""||doctor==""){
alert("Please fill all fields");
return;
}

let patients=JSON.parse(localStorage.getItem("patients"))||[];

patients.push({
name:name,
age:age,
disease:disease,
doctor:doctor
});

localStorage.setItem("patients",JSON.stringify(patients));

loadPatients();

document.getElementById("name").value="";
document.getElementById("age").value="";
document.getElementById("disease").value="";
document.getElementById("doctor").value="";
}

function loadPatients(){

let patients=JSON.parse(localStorage.getItem("patients"))||[];

let table=document.getElementById("patientTable");

table.innerHTML=`
<tr>
<th>Name</th>
<th>Age</th>
<th>Disease</th>
<th>Doctor</th>
<th>Action</th>
</tr>
`;

patients.forEach((p,i)=>{

let row=table.insertRow();

row.insertCell(0).innerHTML=p.name;
row.insertCell(1).innerHTML=p.age;
row.insertCell(2).innerHTML=p.disease;
row.insertCell(3).innerHTML=p.doctor;

row.insertCell(4).innerHTML=
`<button class="deleteBtn" onclick="deletePatient(${i})">Delete</button>`;

});

}

function deletePatient(i){

let patients=JSON.parse(localStorage.getItem("patients"));

patients.splice(i,1);

localStorage.setItem("patients",JSON.stringify(patients));

loadPatients();

}

window.onload=loadPatients;
