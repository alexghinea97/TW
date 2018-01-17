window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "10px Arial";
    ctx.fillText("",10,50);

    var newItem = document.createElement("div");
    newItem.id = "displayDiv";
    var div = document.getElementById("timer");
    div.insertBefore(newItem, div.childNodes[0]);

    document.getElementById("submitForm").onclick = submitForm;
    
    countDown(8);
    setTimeout(function(){ submitForm() }, 10000);
  }

  function countDown(i) {
    var int = setInterval(function () {
        document.getElementById("displayDiv").innerHTML = "Number: " + i;
       
        i-- || clearInterval(int);  //if i is 0, then stop the interval
        if(i==0) {
          var c = document.getElementById("myCanvas");
          var ctx = c.getContext("2d");
          ctx.font = "20px Arial";
          ctx.fillText("",10,50);
          ctx.fillText("Your time has expired. ",10,50);
        }
    }, 1000);
  }

  function submitOnEnter() {
    submitForm();
  }

  function checkGender(id) {
    var input = document.getElementById(id);
    
    if(id == 'lmale') {
      document.getElementById('lfemale').className = "";
      document.getElementById('lmale').className = "checked";
    }
    else {
      document.getElementById('lfemale').className = "checked";
      document.getElementById('lmale').className = "";
    }
  }

  function submitForm() {
    var isMale = document.getElementById("lmale").className == "checked" ? true : false;
    var isFemale = document.getElementById("lfemale").className == "checked" ? true : false;
    if(!isMale && !isFemale) {
      var div = document.getElementById("sex");
      div.style.background = "red"; 
      alert("You didn't check gender. Please check one.");
    }
    else {
      var div = document.getElementById("sex");
      div.style.background = "";

      var counter = document.getElementById("displayDiv");
      counter.parentNode.removeChild(counter);

      var actualDate = new Date();
      alert("Your form was sumbitted successfully on " + actualDate);
    }
  }