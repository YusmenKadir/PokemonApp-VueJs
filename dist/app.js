//DOM ELEMENTS
const input = document.querySelector('.userName'); 
const btn = document.querySelector('.submit'); 
const userInfoDiv = document.querySelector('.nav-user');
const alertDiv = document.querySelector('.alert'); 
const modal = document.querySelector('.modal'); 

const userInfo = []; // array which will store user name

//EVENT LISTENERS 

//SHOW MODAL ON PAGE LOAD 
document.addEventListener('DOMContentLoaded',()=>{
   modal.classList.add('show');
}); 

btn.addEventListener('click',()=>{
    //check if user entered name
    //if there is no name show alert message 
    if(input.value == ''){
        alertDiv.classList.add('active');
        setTimeout(() => {
            alertDiv.classList.remove('active')
        }, 1000);
        //if there is name remove modal and show user info on navbar
    }else{
        modal.classList.remove('show');
        //push username to userInfo array 
        userInfo.push(input.value); 
        userInfoDiv.innerHTML = `<h4>Welcome ${userInfo[0]}</h4>`; 
    }

    
    //clear input field
    input.value = '';
});

