document.querySelector(".l1").onclick = a;
document.querySelector(".l2").onclick = b;
document.querySelector(".l3").onclick = c;
document.querySelector(".l4").onclick = d;
var ls = "position: relative; top: 0px;font-size: 12px;transition: all 0.3s ease 0s;color:black;";
var is = "height : 30px ;  ";

function a() {
    document.querySelector(".fname").style = is;
    document.querySelector(".fname").focus();
    this.style = ls;
};

function b() {
    document.querySelector(".lname").style = is;
    document.querySelector(".lname").focus();
    this.style = ls;
}

function c() {
    document.querySelector(".email").focus();
    this.style = ls;
    document.querySelector(".email").style = is;
}

function d() {
    document.querySelector(".number").style = is;
    document.querySelector(".number").focus();
    this.style = ls;
}