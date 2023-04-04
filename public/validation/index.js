
const validate = ()=>{
    
    
   const sure = document.getElementById("sure");
   const secondName = document.getElementById("secondName");
   const email = document.getElementById("email");
   const password = document.getElementById("password");
   const confirmPassword = document.getElementById("confirmPassword");
   const location = document.getElementById("location");
   const check1 = document.getElementById("check1");
   const check2 = document.getElementById("check2");
   const users = document.getElementById("users");
   const form1 = document.getElementById("form1");
   const err = document.getElementById("err");
   
       
   if(sure.value ==""){
      sure.style.border="solid red";
      return false 
   }
    else{
      sure.style.border=" green";
    } 

   if(secondName.value ==""){
      secondName.style.border=" solid red";
      return false  
   }
    else{
      secondName.style.border=" solid green";
    }
   if(email.value ==""){
      email.style.border="solid red";
      return false  
   }
    else{
      email.style.border="solid green";
    }

   if(password.value ==""){
      password.style.border=" solid red";
      return false 
   }
    else{
      password.style.border=" solid green";
    }

   if(confirmPassword.value !== password.value ){
      confirmPassword.style.border= 'solid red'
      err.innerText='Password dont match'
      err.style='color:red'
      return false 
   }
     else{
      confirmPassword.style.border= 'solid green'
      err.innerText='Password  match'
      err.style='color:green'
    }
   if(!(check1.checked || check2.checked) ){
         check1.style=" solid red";
         return false 
   }

   if(location.value ==""){
      // location.style.border=" solid red";
      return false;  
   }
    else{
      location.style.border=" solid green";
    }

}
//  if(!(check1.checked && check2.checked) ){
//       check1.style=" solid red";
//       return false;  
//    }
 // if(username1.value ==""){
   //    username1.style.border=" solid red";
   //    // return false;  
   // }