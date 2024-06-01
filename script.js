
function validate() {
  var fname = document.getElementById("t1").value;
  var email = document.getElementById("t2").value;
  var phn = document.getElementById("t3").value;


  // regular exp for name
  var reg = /^[A-Za-z]+$/;

  // regular exp for phone number
  var reg2 = /^[7-9][0-9]{9}$/; 

  // regular exp for email
  var reg5 = /^[\w.-]+@[a-z]+\.[a-z\.]{2,5}$/;

  if (fname == "") {
      alert("Please Enter Your Name");
      return false;
  }
  if (fname.length < 3) {
      alert("Please Enter a Proper Name");
      return false;
  }
  if (!fname.match(reg)) {
      alert("Enter a Valid Name Not Numbers");
      return false;
  }
  
  if (email == "") {
      alert("Please enter Email");
      return false;
  }
  if (!email.match(reg5)) {
      alert("Invalid Email");
      return false;
  }

  if (phn == "") {
      alert("Please Enter Contact Number");
      return false;
  }
  if (!phn.match(reg2)) {
      alert("Enter A Valid Contact Number.");
      return false;
  }



}


// function msg(){
//   window.alert("Thank You for Contacting Us, We'll Be in Contact Soon!!");
//   document.getElementById("cform").reset(); 
// }