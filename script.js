var sliderMain = document.getElementById("carousel");
var item = sliderMain.getElementsByClassName("card");

function next(){
    sliderMain.append(item[0]);
}
function prev(){
    sliderMain.prepend(item[item.length - 1]);
}