// click vao o mau nao ddoi phong nen container mau do
// duyet qua tat ca phan tu roi lua chon mau
// goi ra mau trong o 
// gan mau cho container
let colorBox = document.getElementsByClassName("color-box");
let container = document.getElementById("container");
for (let i = 0;i < colorBox.length;i = i + 1){
    colorBox[i].addEventListener("click", function () {
    let color = colorBox[i].style.backgroundColor;
    container.style.background = color;
  
    })
};
