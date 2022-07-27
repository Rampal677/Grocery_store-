//sign in code start from here

function signin() {
  
  let localName = document.getElementById("signInputEmail").value;
  let localPass = document.getElementById("signInputPassword").value;
  if (localName != "" && localPass !=0) {
    alert("Sign in succesfully") 
    localStorage.setItem("signName", localName);
    localStorage.setItem("signPass", localPass);       
    open("../login.html");
  }
  else
    alert("Please Try again later");
   
  
}

