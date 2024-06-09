
let heading = document.getElementById('heading'); 
let newheading =document.getElementById('newheading');
const email = document.getElementById('email');
const mail = document.getElementById('mail');
const phone = document.getElementById('phone');
const phoneno = document.getElementById('phoneno');
let link = document.getElementById('link');
let linkdn = document.getElementById('linkdn');
let job = document.getElementById('job');
let jobr = document.getElementById('jobr');
const skill = document.getElementById('skill');
const list = document.createElement('li');
const text = document.getElementsByClassName('text');
let clg =document.getElementById('clg');
let college = document.getElementById('college');
let ssc = document.getElementById('ssc');
let school = document.getElementById('school');
let sscmarks =document.getElementById('sscmarks');
let percentage = document.getElementById('percentage');
const stream =document.getElementById('stream');
const branch = document.getElementById('branch');
const clgmarks = document.getElementById('clgmarks');
const cgpa = document.getElementById('cgpa');
const hsc = document.getElementById('hsc');
const junior_college = document.getElementById('junior_college');
const hscmarks = document.getElementById('hscmarks');
const per = document.getElementById('per');
const textarea = document.getElementById('textarea');
const para = document.getElementById('para');
const mylink = document.getElementById('mylink');
const gitlink = document.getElementById('gitlink');
const add = document.getElementById('add');
const address = document.getElementById('address');

function generateCv(){
    let currenttextarea = textarea.value;
    para.innerText = currenttextarea;
}

function addName() {
    var nameInput = document.getElementById("nameInput");
    var skill = document.getElementById("skill");
    var skills = nameInput.value.trim();

    if(skills !== ""){
        var skillList = document.createElement("li");
        skillList.textContent=skills;
        skill.appendChild(skillList);
        nameInput.value="";
    }
            
}

function addHobby(){
    var inputIntrest = document.getElementById("inputIntrest");
    var hobby =document.getElementById("hobby");
    var hobbies = inputIntrest.value.trim();

    if( hobbies !== "" ){
        var hobbyList = document.createElement("li");
        hobby.appendChild(hobbyList);
        hobbyList.textContent = hobbies;
        inputIntrest.value = "";
    }
}

function addPersonal(){
    let newPhone = phone.value;
        newMail = mail.value;
        newName =newheading.value
        newlink =link.value;
        newjob = jobr.value;
        newgit = gitlink.value;
        newaddress = address.value;
    
    add.innerText= newaddress;
    heading.innerText = newName;
    email.innerText = newMail;
    phoneno.innerText = newPhone;
    linkdn.innerText = newlink;
    job.innerText = newjob;
    mylink.href=newgit;
}
function addEducation(){
    let collegeName =clg.value
    let percentages= sscmarks.value;
    let schoolName = ssc.value;
    let branchName = branch.value;
    let currentCgpa = clgmarks.value;
    let currentmarks = hscmarks.value;
    let currentclg = hsc.value;

    college.innerText = collegeName;
    percentage.innerText=percentages;
    school.innerText=schoolName;
    stream.innerText=branchName;
    cgpa.innerText = currentCgpa;
    junior_college.innerText =currentclg;
    per.innerText = currentmarks;
}

const dateInput = document.getElementById('dateInput');
const date = document.getElementById('date');
const company = document.getElementById('company');
const comp = document.getElementById('comp');
const descrip = document.getElementById('descrip');
const desc = document.getElementById('desc');

function addExp(){
    let currentDate =dateInput.value;
    let companies = comp.value;
    let newdesc = descrip.value;
    company.innerText = companies;
    date.innerText =currentDate;
    desc.innerText =newdesc;
        }

function prints(){
 window.print();
}



      