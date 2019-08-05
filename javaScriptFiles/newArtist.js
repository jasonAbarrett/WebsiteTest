/*------------------------------------------------------
Created  2018/08/07 by Jason Barrett       .
*/
function checkAll1()  {

    var enteredFN1;
    var regEx = /^[a-zA-Z]{2}/;
    enteredFN1 = document.getElementById("nameFirst1").value;
      if(!regEx.test(enteredFN1))  {
        alert("First name must start with two letters and be no longer than 20 characters in length")
        document.getElementById("nameFirst1").select();
        return false;  }

    var enteredLN1;
    var regEx = /^[a-zA-Z]{2}/;
    enteredLN1 = document.getElementById("nameLast1").value;
      if(!regEx.test(enteredLN1))  {
        alert("Last name must start with two letters and be no longer than 25 characters in length")
        document.getElementById("nameLast1").select();
        return false;  }

    var enteredad;
    var regEx = /^.{5}/;
    enteredad = document.getElementById("address").value;
      if(!regEx.test(enteredad))  {
        alert("Address must contain at least 5 characters and be no longer than 35 characters in length")
        document.getElementById("address").select();
        return false;  }

    var entercity;
    var regEx = /^[a-zA-Z]{2}/;
    entercity = document.getElementById("city").value;
      if(!regEx.test(entercity))  {
        alert("City must start with two letters and be no longer than 20 characters in length")
        document.getElementById("city").select();
        return false;  }

    var enterstate;
    var regEx = /^[a-zA-Z]{2}/;
    enterstate = document.getElementById("state").value;
      if(!regEx.test(enterstate))  {
        alert("State must start with two letters and be no longer than 20 characters in length")
        document.getElementById("state").select();
        return false;  }

    var enterzip;
    var regEx = /^.{5}/;
    enterzip = document.getElementById("zip").value;
      if(!regEx.test(enterzip))  {
        alert("Zip must contain at least 5 characters and be no longer than 15 characters in length")
        document.getElementById("zip").select();
        return false;  }

    var TelNum;
    var regEx = /^.{7}/;
    TelNum = document.getElementById("tele").value;
      if(!regEx.test(TelNum))  {
        alert("Telephone number must be at least 7 characters, but no more than 15")
        document.getElementById("tele").select();
        return false;
      }

  var Emailfld;
  var regEx = /^.{7}/;
  Emailfld = document.getElementById("email1").value;
    if(!regEx.test(Emailfld))  {
      alert("Email must be at least 7 characters, but no more than 40")
      document.getElementById("email1").select();
      return false;
    }

    var passwrd;
  var regEx = /^.{5}/;
  passwrd = document.getElementById("pass").value;
    if(!regEx.test(passwrd))  {
      alert("Password must be at least 5 characters, but no more than 15")
      document.getElementById("pass").select();
      return false;
    }

  var passconfirm;
  var passwrd;
  passconfirm = document.getElementById("passconfirm").value;
  passwrd = document.getElementById("pass").value;
    if(passwrd != passconfirm)  {
      alert("Password does not match, please correct and resubmit")
      document.getElementById("passconfirm").select();
      return false;
    }

  var bio;
  var regEx = /^.{20}/;
  bio = document.getElementById("InputComment1").value;
    if(!regEx.test(bio))  {
      alert("Biography must be at least 20 characters long and no longer than 1000 characters in length")
      document.getElementById("InputComment1").select();
      return false;  }


      return true;    // if made it to here, all OK--let submit proceed

}  // FUNCTION ENDS HERE -------------------------------
