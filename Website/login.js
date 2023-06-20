function validate()
{
    var username=document.getElementsById("username").value;
    var password=document.getElementsById("password").value;
    if(username=="admin"&& password=="user")
    {
        alert("login sucessfully");
        return false;
    }
    else
    {
       alert("login failed");

    }
}