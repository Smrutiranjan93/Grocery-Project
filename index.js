function validate()
{
    let userName=document.getElementById("username").value;
    let passWord=document.getElementById("password").value;

    if(userName==""){
        alert("please enter your name");
        return false;
    }
    if(passWord==""){
        alert("please enter your password");
        return false;
    }else{
        if(passWord.length<=5 && passWord.length>=15){
            alert("password must be greator than 5 char and less than 15 char")
        }
    }
    // else{
    //     var pass="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    //     var pass1=pass.test(pass);
    //     if(pass1){

    //     }else{
    //         alert("password is not in correct format");
    //         return false;
    //     }
    // }

    if(userName=="smruti" && passWord=="Ranjan@93")
    {
    
        alert("login successfully");
         return false;
    }
    else{
        alert("login failed");
    }
}