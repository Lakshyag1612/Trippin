
var attempt=3
function validate(){
    
    let usrname= document.getElementById("number").value;
    let pass= document.getElementById("password").value;
    if (usrname=="aditya" && pass=="1233" ){
        alert("LOGIN SUCCESSFUL");
        // console.log("jhgdhf");
        return false;
        
    }
    if(attempt>0){
        attempt--;
        alert("wrong id or password "+ attempt+" attempt left");
        
        if(attempt==0){
            document.getElementById("user").disabled = true;
            document.getElementById("password").disabled = true;
        }

    }
    // else{
    //     document.getElementById("user").disabled = true;
    //     document.getElementById("password").disabled = true;
    
    
}