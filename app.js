function processQuestionnaire() 
    {

    var form = document.getElementById("questionnaire-form");
    var q1 = form.elements["q1"].value;
    var q2 = form.elements["q2"].value;
    var q3 = form.elements["q3"].value;
    var q4 = form.elements["q4"].value;
    var q5 = form.elements["q5"].value;
    var q6 = form.elements["q6"].value;
    var q7 = form.elements["q7"].value;
    var q8 = form.elements["q8"].value;
    var q9 = form.elements["q9"].value;
    // Create an array of question elements
    var questions = [q1, q2, q3, q4,q5,q6,q7,q8,q9];

// Loop through the questions array
for (var i = 0; i < questions.length; i++) {
  var question = questions[i];
  if (question !== "yes" && question !== "no") {
      // Display error message
      swal("โปรดเลือกข้อคำถามให้ครบ", "", "error");
      document.getElementById("processQuestionnaire").innerHTML = "thankyou";
      return;
    }
  }
    var score = 0;
    if (q1 == "yes") { score++; }
    if (q2 == "yes") { score+=2; }
    if (q3 == "yes") { score+=6; }
    if (q4 == "no") { score+=8; }
    if (q5 == "yes") { score+=8; }
    if (q6 == "yes") { score+=9; }
    if (q7 == "yes") { score+=4; }
    if (q8 == "yes") { score+=10; }
    if (q9 == "yes") { score+=4; }

    if (score == 0 ) {
      swal("ไม่มีแนวโน้มฆ่าตัวตาย","แปลผลสำเร็จ","success");
    } 
    else if (score <= 8)
    {
      swal("มีแนวโน้มฆ่าตัวตายในปัจจุบัน   ระดับน้อย","แปลผลสำเร็จ","success");
    }
    else if(score <=17 )
    {
      swal("มีแนวโน้มฆ่าตัวตายในปัจจุบัน   ระดับปานกลาง","แปลผลสำเร็จ","success");
    }

    else {
      swal("มีแนวโน้มฆ่าตัวตายในปัจจุบัน ระดับรุนแรง","ต้องพบแพทย์เพื่อประเมินอาการและให้การรักษาโดยเร็ว ไม่ควรปล่อยทิ้งไว้","success");

    }
    document.getElementById("processQuestionnaire").innerHTML = "thankyou";
  }

  