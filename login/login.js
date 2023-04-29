const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login_link')
const registerLink = document.querySelector('.login_registration')

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})


function Register(){
    const userName = document.getElementById('Username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
  
    let requiredPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(!requiredPassword.test(password)){
      alert('Need capital letter ,number and special characters')
      return
    }
  
    localStorage.setItem('Username',userName)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
  
    alert('Registration successful')
  }
  

  function login(){
    const logEmail =document.getElementById('conformemail').value
    const logPassword =document.getElementById('conformpassword').value

    const strongEmail = localStorage.getItem('email')
    const strongPassword = localStorage.getItem('password')

    if(strongEmail===logEmail && strongPassword===logPassword){
        alert('Welcome')
    }else{
        alert('Not Match,Try Again')
    }
  }
