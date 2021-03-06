let container = document.createElement('div');
container.classList.add('container')
let  navdiv=document.createElement('div');
navdiv.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Zen Demo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  
    <div class="navbar-nav">
      <a class="nav-link active" href="./index.html">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="./student.html">Student</a>
      <a class="nav-link" href="./mentor.html">Mentor</a>
      
    </div>
  </div>
</nav>`

container.append(navdiv);
let display= document.createElement('div');
display.classList.add('row');
let studentsdisplay= document.createElement('div');
studentsdisplay.classList.add('col-12',);
studentsdisplay.id='studentsdisplay';
let header= document.createElement('header');
header.classList.add('header','display-4')
header.style.textAlign="center"
header.innerText='STUDENTS';
studentsdisplay.append(header);
display.append(studentsdisplay);
let mentorsdisplay= document.createElement('div');
mentorsdisplay.classList.add('col-12');
mentorsdisplay.id='mentorsdisplay';
let header1= document.createElement('header');
header1.classList.add('header','display-4')
header1.style.textAlign="center"
header1.innerText='MENTORS';
mentorsdisplay.append(header1);
display.append(mentorsdisplay);
container.append(display);
document.body.append(container);



 async function fetchdata(){
  let stringdata= await fetch('https://zenclass-demo-server.herokuapp.com/students');
  let data= await stringdata.json();
  console.log(data);
  let card= document.createElement('div');
  card.classList.add('row','border');
  data.forEach(element => {
    let carddiv= document.createElement('div');
    carddiv.classList.add('col-3',)
     carddiv.innerHTML =`<div class="card text-white bg-primary mb-2" style="max-width: 12rem;">
     <div class="card-header">${element._id}</div>
      <div class="card-body"  id="${element._id}">
        <h5 class="card-title">${element.name} </h5>
      </div>
    </div>`
    if(element.mentorId){
      let mentorid= document.createElement('p');
      mentorid.classList.add('mt-1','row','border','rounded','bg-success');
      mentorid.style.maxWidth=13+'rem';
      mentorid.innerText='MentorID:'+' '+''+element.mentorId+'';
      carddiv.append(mentorid);
    }
  card.append(carddiv);

  });
    
  document.getElementById('studentsdisplay').append(card);


  let stringdata1= await fetch('https://zenclass-demo-server.herokuapp.com/mentors');
  let data1= await stringdata1.json();
  console.log(data1);
  let card1= document.createElement('div');
  card1.classList.add('row','border');
  data1.forEach(element => {
    let carddiv1= document.createElement('div');
    carddiv1.classList.add('col-3',)
    
     carddiv1.innerHTML =`<div class="card text-white bg-success mb-2" style="max-width: 14rem;">
     <div class="card-header">${element._id}</div>
      <div class="card-body"  id="${element._id}">
      <h5 class="card-title mt-3"> ${element.name} </h5>
      <p class="card-title mt-3"> ${element.mobile_number} </p>
      <p class="card-title mt-1"> ${element.email} </p>
      </div>
    </div>`

    if(element.students != undefined){
      element.students.forEach((ele) => {
        let studentid= document.createElement('p');
        studentid.classList.add('mt-1','row','border','rounded','bg-primary');
        studentid.style.maxWidth=14+'rem'
        studentid.innerText='studentId:'+'  '+''+ele+'';
        carddiv1.append(studentid);
      });
  card1.append(carddiv1);

 

  }
  });
    
  document.getElementById('mentorsdisplay').append(card1);
}


fetchdata();