
let container = document.createElement('div');
container.classList.add('container')
let  navdiv=document.createElement('div');
navdiv.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link" href="./index.html">Home </a>
      <a class="nav-link" href="./student.html">Student </a>
      <a class="nav-link active" href="./mentor.html">Mentor <span class="sr-only">(current)</span></a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>`

container.append(navdiv);
let display= document.createElement('form');
display.classList.add('row');
display.id='display'
let header= document.createElement('header');
header.classList.add('header','display-4','col-12', )
header.style.textAlign="center"
header.innerText='CREATE MENTOR';
display.append(header);
let name= document.createElement('input');
name.id='name';
name.classList.add('col-12','ml-5','mr-5','mt-5')
name.type='text';
name.requried=true;
name.placeholder='Full Name';
display.append(name);
let mobileNumber= document.createElement('input');
mobileNumber.id='mobileNumber';
mobileNumber.classList.add('col-12','ml-5','mr-5','mt-5')
mobileNumber.type='text';

mobileNumber.placeholder='Mobile Number';
display.append(mobileNumber);
let emil= document.createElement('input');
emil.id='emil';
emil.classList.add('col-12','ml-5','mr-5','mt-5')
emil.type='email';

emil.placeholder='Email';
display.append(emil);
let namebtn= document.createElement('submit');
namebtn.id='submit';
namebtn.classList.add('btn','btn-primary','col-4','ml-5','mr-5','mt-5');
namebtn.type='submit'
namebtn.innerText='CREATE'
namebtn.style.textAlign='center'
display.append(namebtn);
container.append(display);
let display2= document.createElement('form');
display2.classList.add('row','mt-5');
let header2= document.createElement('header');
header2.classList.add('header','display-4', 'col-12', 'mt-5')
header2.style.textAlign="center"
header2.innerText='ASSIGN MENTOR TO STUDENT';
display2.append(header2);
let selectmentor= document.createElement('select');
selectmentor.classList.add('col-12','ml-5','mr-5','mt-5');
selectmentor.id='selectmentor';
let option= document.createElement('option');
option.value= 0;
option.innerText='Select mentor';
selectmentor.append(option);
display2.append(selectmentor);
let selectStudent= document.createElement('select');;
selectStudent.classList.add('col-12','ml-5','mr-5','mt-5');
selectStudent.id='selectStudent';
let option1= document.createElement('option');
option1.value= 0;
option1.innerText='Select student';
selectStudent.append(option1);
selectStudent.setAttribute('requried','true')
display2.append(selectStudent);
let assinbtn= document.createElement('submit');
assinbtn.id='assignsubmit';
assinbtn.classList.add('btn','btn-primary','col-4','ml-5','mr-5','mt-5');
assinbtn.type='submit'
assinbtn.innerText='ASSIGN'
assinbtn.style.textAlign='center'
display2.append(assinbtn);
container.append(display2);
document.body.append(container);




async function postdata(){
    await fetch('https://zenclass-demo-server.herokuapp.com/mentor',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
          "name": document.getElementById('name').value,
          "mobile_number": document.getElementById( 'mobileNumber').value,
          "email":document.getElementById('emil').value
      })
    })
    alert('Mentor created');
    }
    
    
    document.getElementById('submit').addEventListener('click',()=>{
    postdata();
    document.onload();
    });


    async function getdata(){

        let stringdata1= await fetch('https://zenclass-demo-server.herokuapp.com/mentors');
        let data1= await stringdata1.json();
        data1.forEach(element => {
            let option= document.createElement('option');
            option.value= element._id;
            option.innerText=element.name;
            selectmentor.append(option);
        });

        let stringdata= await fetch('https://zenclass-demo-server.herokuapp.com/students');
        let data= await stringdata.json();
           data.forEach(element => {
               if(!element.mentorId){
                let option= document.createElement('option');
                option.value= element._id;
                option.innerText=element.name;
                selectStudent.append(option);
               }
           });

    }
getdata();

async function postassigndata(){
    try {
        await fetch('https://zenclass-demo-server.herokuapp.com/assignmentor',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        student:{_id:document.getElementById('selectStudent').value},
        mentor:{
            _id:document.getElementById('selectmentor').value
        }
      })
    
    })
    alert('Mentor assigned');
    } catch (error) {
        alert(error);
    }
    }

    document.getElementById('assignsubmit').addEventListener('click',()=>{
        postassigndata();
        document.onload();
        });