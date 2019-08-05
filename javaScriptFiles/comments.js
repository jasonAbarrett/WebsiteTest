/*------------------------------------------------------
Created  2018/08/07 by Jason Barrett       .
*/


function checkAll()  {

  //validate first name from 1-20 letters
    var enteredFN;
    var regEx = /^[a-zA-Z]{1}/;

    enteredFN = document.getElementById("nameFirst").value;
      if(!regEx.test(enteredFN))  {
        alert("First name must start with a letter and be between 1 and 20 characters in length")
        FNerror.innerHTML = "&nbsp;&nbsp;First name must start with a letter and be between 1 and 20 characters in length";
        document.getElementById("nameFirst").select();
        return false;  }


  //validate last name from 2-20 letters
    var enteredLN;
    var regEx = /^[a-zA-Z]{2}/;

    enteredLN = document.getElementById("nameLast").value;
      if(!regEx.test(enteredLN))  {
        alert("Last name must start with two letters and be between 2 and 20 characters in length")
        LNerror.innerHTML = "&nbsp;&nbsp;Last name must start with two letters and be between 2 and 20 characters in length";
        document.getElementById("nameLast").select();
        return false;  }


//validate comments text area
  var enteredText;
  var regEx = /^.{10}/;

  enteredText = document.getElementById("InputComment").value;
    if(!regEx.test(enteredText))  {
      alert("Comment must be at least 10 characters in length")
      Comerror.innerHTML = "&nbsp;&nbsp;Comment must be at least 10 characters in length";
      document.getElementById("InputComment").select();
      return false;  }


  if (document.form01.tel.value.length <= 9) {
        alert("Telephone entry must be at least 10 digits--please correct")
        return false;     }

  if (document.form01.email.value.length <= 1) {
              alert("Email entry must be in the form of a valid email address--please correct")
              return false;     }


  /*  if (document.cform.zipCodeFld.value.length <= 4) {
        alert("Zip Code too short--please correct");
      document.cform.zipCodeFld.select();
      return false;    // leave now
    }
*/


    return true;    // if made it to here, all OK--let submit proceed
}  // FUNCTION ENDS HERE -------------------------------


function clearAll() {
          var FNerrorremove;
          FNerrorremove = document.getElementById("FNerror");
          FNerrorremove.innerHTML = "";

         var LNerrorremove;
         LNerrorremove = document.getElementById("LNerror");
         LNerrorremove.innerHTML = "";

         var Comerrorremove;
         Comerrorremove = document.getElementById("Comerror");
         Comerrorremove.innerHTML = "";
                }



function contactRequestInfo()   {

  var field;
  field = document.getElementById("fieldset");
  field.style.display = "block";

  var TelLabel;
  TelLabel = document.getElementById("label_tel");
  TelLabel.innerHTML =
  "<label>Telephone:</label>&nbsp;&nbsp;";

  var TelNum;
  TelNum = document.getElementById("tel");
  TelNum.innerHTML =
  "<input type='tel' name='tel' placeholder='Your Telephone Number' class='fields_input'><br/><br/>"

  var EmailLabel;
  EmailLabel = document.getElementById("label_email");
  EmailLabel.innerHTML =
  "<label>Email:</label>&nbsp;&nbsp;";

  var EmailAd;
  EmailAd = document.getElementById("email");
  EmailAd.innerHTML =
  "<input type='email' name='email' placeholder='Your Email Address' class='fields_input'><br/>"

  var legendlab;
  legendlab = document.getElementById("legend");
  legendlab.innerHTML =
  'Contact Info'


}
