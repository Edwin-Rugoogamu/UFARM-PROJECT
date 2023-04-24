
const validate = ()=>{
    
    
  const sure = document.getElementById("sure");
  const secondName = document.getElementById("secondName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const location = document.getElementById("location");
  const check1 = document.getElementById("check1");
  const check2 = document.getElementById("check2");
  const periodOfStay = document.getElementById("periodOfStay");
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
    
     return false;  
  }
   else{
     location.style.border=" solid green";
   }
   
   if(periodOfStay.value<10){
     periodOfStay.style.border="solid red";
     return false 
  }
   else{
     periodOfStay.style.border=" green";
   }   
}


// Login

const validate2 = ()=>{

const username1 = document.getElementById("username1");
const password1 = document.getElementById("password1");


if(username1.value==""){
  username1.style.border="solid red"
  return false
}
else{
 username1.style.border="groove green"
}

if(password1.value==""){
 password1.style.border="solid red"
 return false
}
else{
 password1.style.border="groove green"
}


}



const validate3 = ()=>{

 const firstname = document.getElementById("firstname");
 const secondname = document.getElementById("secondname");
 const email = document.getElementById("email");
 const role = document.getElementById("role");
 const ward = document.getElementById("ward");
 const foNumber = document.getElementById("foNumber");
 const regDate = document.getElementById("regDate");
 const foBirth = document.getElementById("foBirth");
 const ninNumber = document.getElementById("ninNumber");
 const phonenumber = document.getElementById("phonenumber");
 const residence = document.getElementById("residence");
 const residenceType = document.getElementById("residenceType");
 const periodOfStay = document.getElementById("periodOfStay");



 if(firstname.value==""){
   firstname.style.border="solid red"
   return false
}
else{
 firstname.style.border="groove green"
}

if(secondname.value==""){
 secondname.style.border="solid red"
 return false
}
else{
 secondname.style.border="groove green"
}
if(email.value==""){
 email.style.border="solid red"
 return false
}
else{
 email.style.border="groove green"
}
if(role.value==""){
 role.style.border="solid red"
 return false
}
else{
 role.style.border="groove green"
}
if(ward.value==""){
 ward.style.border="solid red"
 return false
}
else{
ward.style.border="groove green"
}
if(foNumber.value==""){
 foNumber.style.border="solid red"
 return false
}
else{
 foNumber.style.border="groove green"
}
if(regDate.value==""){
 regDate.style.border="solid red"
 return false
}
else{
 regDate.style.border="groove green"
}
if(foBirth.value==""){
 foBirth.style.border="solid red"
 return false
}
else{
 foBirth.style.border="groove green"
}
if(ninNumber.value==""){
 ninNumber.style.border="solid red"
 return false
}
else{
 ninNumber.style.border="groove green"
}
if(phonenumber.value==""){
 phonenumber.style.border="solid red"
 return false
}
else{
 phonenumber.style.border="groove green"
}
if(residence.value==""){
 residence.style.border="solid red"
 return false
}
else{
 residence.style.border="groove green"
}
if(residenceType.value==""){
 residenceType.style.border="solid red"
 return false
}
else{
 residenceType.style.border="groove green"
}
if(periodOfStay.value==""){
 periodOfStay.style.border="solid red"
 return false
}
else{
 periodOfStay.style.border="groove green"
}


}

const validate4 = ()=>{

const firstname = document.getElementById("firstname");
const secondName = document.getElementById("secondName");
const foNumber = document.getElementById("foNumber");
const email = document.getElementById("email");
const date = document.getElementById("date");
const dob = document.getElementById("dob");
const role = document.getElementById("role");
const phonenumber = document.getElementById("phonenumber");
const othernumber = document.getElementById("othernumber");
const ninNumber = document.getElementById("ninNumber");
const users = document.getElementById("users");



if(firstname.value==""){
 firstname.style.border="solid red"
 return false
}
else{
firstname.style.border="groove green"
}

if(secondName.value==""){
 secondName.style.border="solid red"
 return false
}
else{
 secondName.style.border="groove green"
}

if(foNumber.value==""){
 foNumber.style.border="solid red"
 return false
}
else{
 foNumber.style.border="groove green"
}

if(email.value==""){
 email.style.border="solid red"
 return false
}
else{
 email.style.border="groove green"
}

if(date.value==""){
 date.style.border="solid red"
 return false
}
else{
 date.style.border="groove green"
}

if(dob.value==""){
 dob.style.border="solid red"
 return false
}
else{
dob.style.border="groove green"
}

if(role.value==""){
 role.style.border="solid red"
 return false
}
else{
role.style.border="groove green"
}

if(phonenumber.value==""){
 phonenumber.style.border="solid red"
 return false
}
else{
phonenumber.style.border="groove green"
}

if(othernumber.value==""){
 othernumber.style.border="solid red"
 return false
}
else{
othernumber.style.border="groove green"
}

if(ninNumber.value==""){
 ninNumber.style.border="solid red"
 return false
}
else{
ninNumber.style.border="groove green"
}

if( users.value==""){
  users.style.border="solid red"
 return false
}
else{
users.style.border="groove green"
}


}


const validate5 = ()=>{

  const name = document.getElementById("name");
  const image = document.getElementById("image");
  const ward = document.getElementById("ward");
  const date = document.getElementById("date");
  const price = document.getElementById("price");
  const category = document.getElementById("category");
  const payment = document.getElementById("payment");
  const directions = document.getElementById("directions");
  const delivery = document.getElementById("delivery");
  const quantity = document.getElementById("quantity");
  const produce = document.getElementById("produce");
  const availability = document.getElementById("availability");


  if(name.value==""){
    name.style.border="solid red"
    return false
   }
   else{
   name.style.border="groove green"
   }

   if(image.value==""){
    image.style.border="solid red"
    return false
   }
   else{
   image.style.border="groove green"
   }

   if(ward.value==""){
    ward.style.border="solid red"
    return false
   }
   else{
   ward.style.border="groove green"
   }

   if(date.value==""){
    date.style.border="solid red"
    return false
   }
   else{
   date.style.border="groove green"
   }

   if(price.value==""){
    price.style.border="solid red"
    return false
   }
   else{
   price.style.border="groove green"
   }

   if(category.value==""){
    category.style.border="solid red"
    return false
   }
   else{
   category.style.border="groove green"
   }

   if(payment.value==""){
    payment.style.border="solid red"
    return false
   }
   else{
   payment.style.border="groove green"
   }

   if(directions.value==""){
    directions.style.border="solid red"
    return false
   }
   else{
   directions.style.border="groove green"
   }

   if(delivery.value==""){
    delivery.style.border="solid red"
    return false
   }
   else{
   delivery.style.border="groove green"
   }

   if(quantity.value==""){
    quantity.style.border="solid red"
    return false
   }
   else{
   quantity.style.border="groove green"
   }

   if(produce.value==""){
    produce.style.border="solid red"
    return false
   }
   else{
   produce.style.border="groove green"
   }

   if(availability .value==""){
    availability .style.border="solid red"
    return false
   }
   else{
   availability .style.border="groove green"
   }



}