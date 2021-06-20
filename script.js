
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result").value;

    if (Number(principal) <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        // Gets the total amount
        total = Number(principal) + Number(interest);
    }
         
         final = `<br>If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${total}</mark>,<br>
    in the year <mark>${year}</mark><br>`;

    document.getElementById("result").innerHTML = final;
}
            
