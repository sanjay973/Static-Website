var inputField=document.getElementById('ipAddress');
var form=document.getElementById('submit_form');

var text=document.getElementById('ip_class');
var ipformat = /^(25[0-5]| 2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;


form.addEventListener('submit',(e)=>{
    e.preventDefault();
const regex=new RegExp(ipformat);
if(!inputField.value.match(regex)){
    text.textContent="Not a valid Ip address"
    return;
}
    
let ipClass=inputField.value.split(".")[0];
if(ipClass<=127){
    text.textContent="This is class A ip address"
}

if(ipClass>127&&ipClass<=191){
        text.textContent="This is class B ip address"
}

if(ipClass>192&&ipClass<=223){
       text.textContent="This is class C ip address"
}

if(ipClass>223&&ipClass<=239){
       text.textContent="This is class D ip address"
}

if(ipClass>239){
      text.textContent="This is class E ip address"
}
    
})




