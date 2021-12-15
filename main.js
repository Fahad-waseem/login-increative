function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
 if (username=="admin" && password=="user")
 {
console.log("login succesfully");
return false;
 }
else{
    Console.log("login failed");
}
}