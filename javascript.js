function showMore(){
   if(document.getElementById("button1").innerHTML == "+"){
     document.getElementById("faq1").style.display = '';
	 document.getElementById("button1").innerHTML = "-";
	}else{
	 document.getElementById("faq1").style.display = 'none';
	 document.getElementById("button1").innerHTML = "+";
	}
}

function showMore2(){
       if(document.getElementById("button2").innerHTML == "+"){
     document.getElementById("faq2").style.display = '';
	 document.getElementById("button2").innerHTML = "-";
	}else{
	 document.getElementById("faq2").style.display = 'none';
	 document.getElementById("button2").innerHTML = "+";
	}
}

function showMore3(){
      if(document.getElementById("button3").innerHTML == "+"){
     document.getElementById("faq3").style.display = '';
	 document.getElementById("button3").innerHTML = "-";
	}else{
	 document.getElementById("faq3").style.display = 'none';
	 document.getElementById("button3").innerHTML = "+";
	}
}

function myAlert(){
   alert("Your message has been sent");
}

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}