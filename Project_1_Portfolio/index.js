let hour = new Date().getHours();
let greeting = document.getElementById("greeting");

if(hour < 12){
    greeting.innerText = "Good Morning";
}
else if(hour < 18){
    greeting.innerText = "Good Afternoon";
}
else{
    greeting.innerText = "Good Evening";
}

document.getElementById("themeBtn").addEventListener("click",function(){
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue"
        ? "#f4f4f4"
        : "lightblue";
});

function addNumbers(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(num1 === "" || num2 === ""){
        document.getElementById("result").innerText = "Please enter both numbers";
        return;
    }

    let sum = Number(num1) + Number(num2);
    document.getElementById("result").innerText = "Result: " + sum;
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("formMsg");

    if(name === "" || email === ""){
        msg.innerText = "Please fill in both fields.";
        msg.style.color = "red";
        return;
    }

    msg.innerText = "Thanks, " + name + "! Your message has been received.";
    msg.style.color = "green";
    this.reset();
});