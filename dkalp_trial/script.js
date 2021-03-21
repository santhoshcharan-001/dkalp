function collapsed()
{
    var x = document.getElementById("hams");
    x.classList.toggle("collapsed");
}

setTimeout(function(){
    console.log("hello");
},5000)

var i = 1;

function change(){
    if(i == 1){
        alert("Are you sure,check once again");
        i = 0;
    }
    else{
        alert("Form submitted");
    }
}