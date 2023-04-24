function validate(){
    var user=document.getElementById("name")
    var password = document.getElementById("pass");
   

    if(user.value.length!=0 && password.value.length >= 8 && password.value=="admin123"){
        alert("Hurray!! "+user.value+ " logged in Succesfully!!!");
        window.location.replace("home.html");
        return false;
    }
    else{
        alert("Oops!! Login Failed");
    }
}

