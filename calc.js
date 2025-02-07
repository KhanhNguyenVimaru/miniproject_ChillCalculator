const value = {
    number : "",
}
function showData(){
    document.getElementById("monitor").textContent = value.number;
}
function getNumber(){
    document.querySelectorAll(".number").forEach(function(item){
        item.addEventListener("click", function(){
            value.number += item.textContent;
            showData();
        });
    });
    document.querySelectorAll(".button").forEach(function(item){
        item.addEventListener("click", function(){
            value.number += item.textContent;
            showData();
        });
    });
}

//hàm xử lý được đặt từ đây đổ xuống
getNumber();

const btnEqual = document.getElementById("equal");
btnEqual.addEventListener("click", function(){
    try{
        value.number = eval(value.number);
        document.getElementById("monitor").textContent = value.number;
    }
    catch{
        value.number = "";
        document.getElementById("monitor").textContent = "Error";
    }
});

const btnReset = document.querySelector(".reset").addEventListener("click", function(){
    value.number = "";
    showData(); 
});