 //checking user is already login or not
document.getElementById("logout").style.display ="none";
document.getElementById("logutside").style.display =("none")
if(localStorage.getItem("signName")==null || localStorage.getItem("signPass")==0){
  document.getElementById("logout").style.display ="none";
  document.getElementById("logutside").style.display ="none"
  document.getElementById("login").style.display ="";
  document.getElementById("loginside").style.display ="";
}
else if (localStorage.getItem("signName") == localStorage.getItem("localInputName") && localStorage.getItem("signPass") == localStorage.getItem("localInputPass")) {
  document.getElementById("localUserName").innerHTML = localStorage.getItem("signName");
  document.getElementById("login").style.display = "none"
  document.getElementById("loginside").style.display ="none"
  document.getElementById("logutside").style.display =""
  document.getElementById("logout").style.display = ""
}
// else if (localStorage.getItem("signName") == null && localStorage.getItem("signPass") == null) {
//   setTimeout(function () { alert("plz signin for better experince"); open("../signin.html"); }, 30000);
// }
// else if (localStorage.getItem("localInputName") == null && localStorage.getItem("localInputPass") == null) {
//   setTimeout(function () { alert("plz login for better experince"); location = "../login.html"; }, 30000);

// } 

function login() {
  let loginName = document.getElementById("loginInputEmail").value;
  let loginPass = document.getElementById("loginInputPassword").value;
  if(loginName=="" || loginPass==0){
    alert("please fill all detail");
  }
  else if (loginName == localStorage.getItem("signName") && loginPass == localStorage.getItem("signPass")) {
    localStorage.setItem("localInputName", loginName);
    localStorage.setItem("localInputPass", loginPass);
    if (localStorage.getItem("signName") == localStorage.getItem("localInputName") && localStorage.getItem("signPass") == localStorage.getItem("localInputPass")) {
      alert(loginName);
      alert("login succesfully");
      open("index.html");
    }

  }
  else if (loginName != localStorage.getItem("signName") || loginPass != localStorage.getItem("signPass")) {
    alert("You entered Wrong credential");
  }
  else if (localStorage.getItem("localInputName") == null || localStorage.getItem("localInputPass") == null) {
    if (loginName == null || loginPass == null) {
      alert("Fill all Detail");
    }
  }   
}


// if (localStorage.getItem("signName") == null || localStorage.getItem(signPass) == null) {
//   open("../signin.html");
// }


function logout() {
  localStorage.removeItem("localInputName");
  localStorage.removeItem("localInputPass");
  alert("logout succesfully");
}