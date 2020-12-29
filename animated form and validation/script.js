var userNameInput=document.getElementById('username');
var passwordInput=document.getElementById('password');


var form=document.getElementById('submit_form');

var button=document.getElementById('button');

var hardCodedUserName="sophos";
var hardCodedPassword="sophos#123";

var attemptLeft=4;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   if(userNameInput.value!=hardCodedUserName){
       attemptLeft--;
       if(attemptLeft===0){
           userNameInput.disabled=true;
           passwordInput.disabled=true;
           return;
       }
       alert('invalid user name or password only'+ attemptLeft+ ' attempts left');
       return;
   }
 if(passwordInput.value!=hardCodedPassword){
        attemptLeft--;
            if(attemptLeft===0){
           userNameInput.disabled=true;
            passwordInput.disabled=true;
           return;
       }
        alert('invalid user name or password only '+ attemptLeft+ ' attempts left');
        return;
    }
    
    else{
        window.location.href="https://stackblitz.com/";
    }
})