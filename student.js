

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
      <a class="nav-link " href="./index.html">Home </a>
      <a class="nav-link active" href="./student.html">Student <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="./mentor.html">Mentor</a>
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
header.innerText='CREATE STUDENT';
display.append(header);
let name= document.createElement('input');
name.id='name';
name.requried=true;
name.classList.add('col-12','ml-5','mr-5','mt-5')
name.type='text';
name.requried=true;
name.placeholder='Full Name';
display.append(name);
let namebtn= document.createElement('submit');
namebtn.id='submit';
namebtn.classList.add('btn','btn-primary','col-4','ml-5','mr-5','mt-5');
namebtn.type='submit'
namebtn.innerText='CREATE'
namebtn.style.textAlign='center'
display.append(namebtn);
container.append(display);
document.body.append(container);


async function postdata(){
await fetch('https://zenclass-demo-server.herokuapp.com/student',{
method:'POST',
headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({
      "name": document.getElementById('name').value
  })

})
alert('student created');
location.onload();
}


document.getElementById('submit').addEventListener('click',()=>{
postdata();

})