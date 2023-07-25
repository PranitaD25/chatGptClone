// Example POST method implementation:
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response.json(); 
}


sendButton1.addEventListener("click",async()=>{ 
    questionInput1=document.getElementById("questionInput1").value;
    document.getElementById("questionInput1").value="";

    document.querySelector(".right2").style.display="block";
    document.querySelector(".right1").style.display="none";

    document.getElementById("question").innerHTML=questionInput1;

    //get the ans and populate it
    let result=await postData("/api",{"question":questionInput1})

    document.getElementById("solution").innerHTML=result.answer; 
})

sendButton2.addEventListener("click",async()=>{ 
  questionInput2=document.getElementById("questionInput2").value;
   document.getElementById("questionInput2").value="";

  document.querySelector(".right2").style.display="block";
  document.querySelector(".right1").style.display="none";

  document.getElementById("question").innerHTML=questionInput2;

  document.getElementById("solution").innerHTML="Loading..."
  //get the ans and populate it
  let result=await postData("/api",{"question":questionInput2})

  document.getElementById("solution").innerHTML=result.answer; 
})

regenerateResponse.addEventListener("click",async()=>{
  question=document.getElementById("question").textContent;

  document.querySelector(".right2").style.display="block";
  document.querySelector(".right1").style.display="none";

  document.getElementById("solution").innerHTML="Loading..."

  //get the ans and populate it
  let result=await postData("/api",{"question":question})
  document.getElementById("solution").innerHTML=result.answer; 
})

newChat.addEventListener("click",async()=>{
  //active right 1 UI on clicking new chat
  console.log("new chat clicked")
  if(document.querySelector(".right1").style.display=="none")
    //right 2 is active so make right 1 as active
    document.querySelector(".right2").style.display="none";
    document.querySelector(".right1").style.display="block";
  })


  document.addEventListener("DOMContentLoaded", function() {
    const chats = document.querySelectorAll(".chat");
    const boxes = document.querySelectorAll(".boxInput");
  
    chats.forEach(button => {
      button.addEventListener("click", function() {
        if(document.querySelector(".right1").style.display=="none")
          document.getElementById("questionInput2").value=this.textContent.trim();
        else 
          document.getElementById("questionInput1").value=this.textContent.trim();
      });
    });


    boxes.forEach(button => {
      button.addEventListener("click", function() {
        console.log("box clicked")
        if(document.querySelector(".right1").style.display=="none")
          document.getElementById("questionInput2").value=this.textContent.trim();
        else 
          document.getElementById("questionInput1").value=this.textContent.trim();
      });
    });

  });
  