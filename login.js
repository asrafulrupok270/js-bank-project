document.getElementById("btn").addEventListener("click", function(){
    const userEmail = document.getElementById("user-email");
    const email = userEmail.value ;
   
    const userPassword = document.getElementById("user-password ")
    const  password = userPassword.value ;
    if(email == "asrafulrupok54@gmail.com" && password== "rupok131" ){
       window.location.href = "bank.html";
    }
    else{
        alert ("invalid user"); 
    }
})