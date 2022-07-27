
document.getElementById("order").style.display="none";
document.getElementById("suggetionCard").style.display="none";
document.getElementById("suggetionCardsm").style.display ="none";
let mainValue;
let mainPrice;
let mainWeight;
//buy code start from here
 function buy(value){
   mainValue = value;        
   $(window).scrollTop(0);       
   document.getElementById("view").style.display="none";
   document.getElementById("order").style.display="";
   document.getElementById("suggetionCard").style.display="";
   document.getElementById("suggetionCardsm").style.display ="";
   document.getElementById("product-image").src = product[value].img;
   document.getElementById("productName").innerHTML = product[value].name;
   document.getElementById("productPrice").innerHTML = "₹"+product[value].price+" kg";
   document.getElementById("cardProductName").innerHTML = product[value].name;
   document.getElementById("totalPrice").innerHTML ="Total price :"+ product[mainValue].price*1;  
 } 
function totalPrice(){   
   inputQty = document.getElementById("productQty").value;
   mainWeight = inputQty;   
   var totalPrice = product[mainValue].price*(inputQty); 
   mainPrice = totalPrice;  
   document.getElementById("totalPrice").innerHTML ="Total price :"+ totalPrice;
}
 
//buy Now code start from here
document.getElementById("orderDetail").style.display ="none";
// document.getElementById("lastCardBox2").style.display ="none";
function buyNow(){ 
  if(localStorage.getItem("signName")==null || localStorage.getItem("signPass")==0){
    alert("Please login...");
  }
 else if (localStorage.getItem("signName") == localStorage.getItem("localInputName") && localStorage.getItem("signPass") == localStorage.getItem("localInputPass")) {
    document.getElementById("productDetail").style.display ="none";
    // document.getElementById("lastCardBox").style.display ="";
    // document.getElementById("lastCardBox").style.display ="none";
    document.getElementById("orderDetail").style.display = "";    
    document.getElementById("OrderProductName").innerHTML = product[mainValue].name;    
    document.getElementById("OrderProductWeight").innerHTML = mainWeight + "kg";
    document.getElementById("OrderProductTotalPrice").innerHTML = "₹"+ mainPrice;
    
 
  }
  else
  alert("Please login...");
 

}

function placeOrder(){
    //using localStorage to store placed order detail
    alert("Order succesfully placed");
    localStorage.setItem("placeOrderlName",product[mainValue].name);
    localStorage.setItem("placeOrderImg",product[mainValue].img);
    localStorage.setItem("placeOrderPrice",mainPrice);
    
}


//Add cart code start from here
function addCart(){
  if(localStorage.getItem("signName")==null || localStorage.getItem("signPass")==0){
    alert("Please login...");
  }
  else if (localStorage.getItem("signName") == localStorage.getItem("localInputName") && localStorage.getItem("signPass") == localStorage.getItem("localInputPass")) {
    alert("Item successfully added to your cart");
    localStorage.setItem("localName",product[mainValue].name);
    localStorage.setItem("localImg",product[mainValue].img);
    localStorage.setItem("localPrice",mainPrice);
  }
  else
    alert("Please login...")
  }

  function read(){
    alert("read");
  }