'use strict';
 
     
let selectBoxVisible = false; 
let activeIndex = 0; 
const images = document.querySelectorAll('.mainimg img');
 
function toggleSelect() {
    const selectBox = document.getElementById("product");
    const blackmenu = document.getElementById("blackmenu");
    const mainimg = document.querySelector('.mainimg')
    selectBox.selectedIndex = -1;
 
    if (!selectBoxVisible) {
        selectBox.style.display = "block";
        selectBoxVisible = true;
        blackmenu.style.display = "block";
        document.getElementById("menu").classList.add("opt");
        mainimg.classList.add('hovered');
    } else {
        selectBox.style.display = "none";
        selectBoxVisible = false;
        blackmenu.style.display = "none";
        document.getElementById("menu").classList.remove("opt");
        mainimg.classList.remove('hovered');
    }            
}
 
 
function hideSelect() {
    if (!selectBoxVisible) return false; 
 
    const selectBox = document.getElementById("product");
    const blackmenu = document.getElementById("blackmenu");
 
    selectBox.style.display = "none";
    blackmenu.style.display = "none";
    document.getElementById("menu").classList.remove("opt");
    mainimg.classList.remove('hovered');
 
    selectBoxVisible = false;
}
 
document.addEventListener("mouseover", function(event) {
    const target = event.target;
    const selectBox = document.getElementById("product");
 
    if (!selectBox.contains(target)) {
        hideSelect();
    }
});
 
let colorMenu;
 
function productChoice() {
    hideSelect();
    document.getElementById("productIcon").style.color = "initial";
    document.querySelector(".mainimg").style.visibility = "hidden";
    document.querySelector(".productPage").style.visibility = "visible";
    document.querySelector(".productPage").style.color = "black";
    document.getElementById("addCart").style.display ="none";
    document.getElementById("sizeButton").style.display ="block";
 
    let product = document.getElementById("product")
    let selected = product.options[product.selectedIndex].text;
    colorMenu = new ColorMenu(selected);
    colorMenu.setSelectBox();
 
}
let selectedIndex;
function chooseColor(selectedE){
    selectedIndex = selectedE.selectedIndex;
    if(selectedIndex === 0){
        document.getElementById("productIcon").style.color = 'initial';
        document.getElementById("addCart").style.display ="none";
        document.getElementById("sizeButton").style.display ="block";
    } else {
        let colorcode = colorMenu.colors[selectedIndex-1].colorCode;
        document.getElementById("productIcon").style.color = colorcode;
        document.getElementById("addCart").style.display ="block";
        document.getElementById("sizeButton").style.display ="none";
    }
}
 
let cnt =0;
let nummer; 
let priceSub=0;
let productPrice;
 
function addCart() {
    
    nummer = parseInt(number.value);
    if(nummer<1 || nummer>10){
        return false;
    }
 
    cnt += nummer;
 
    let productName = colorMenu.product;
    let iconImg = colorMenu.icon;
    let iconColor = colorMenu.colors[selectedIndex-1].colorCode;
    let productColor = colorMenu.colors[selectedIndex-1].color;
    productPrice = colorMenu.colors[selectedIndex-1].price;
    console.log(productPrice);
    console.log(nummer);
 
    priceSub += Number(nummer*productPrice);
 
    
 
    document.getElementById("cartButton").innerHTML =`<i class="bi bi-cart4"></i>(${cnt})`;
    document.getElementById("cntCart").innerHTML =`<i class="bi bi-cart4"></i>(${cnt})`;
    
    let str = `<div class ="cartIcon" style="color:${iconColor};">${iconImg}</div>`;
    let strT = `<div style ="margin-top : 20px; ">${productName}&nbsp;&nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp&nbsp;&nbsp;&nbsp;${numberWithCommas(productPrice)}원 
    <p style="font-size :15px; color = darkgray; margin-top:10px;"> ${productColor}</p>
    <p style="font-size :15px; color = darkgray; margin-top:10px;">수량 : ${nummer}개</p></div>`;
   
 
    let combinedStr = `<div style="display: flex; flex-direction: row; justify-content: space-evenly;">${str} ${strT}</div>`;
    
    document.getElementById('addedItem').innerHTML += combinedStr;
    subTotal.innerHTML = numberWithCommas(priceSub) + "원";
    vatCalc();
    totalCalc();
 
    initNummer()
}
 
 
// VAT계산(총가격이 10%)
function vatCalc() {
    let vatt = priceSub * 0.1;
    vat.innerHTML = numberWithCommas(vatt) + "원";
}
 
  // 총가격계산(VAT포함한 가격)
function totalCalc() {
    let vatt = priceSub * 0.1;
    let totalPrice = priceSub + vatt;
    tot.innerHTML = numberWithCommas(totalPrice) + "원";
}
 
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}
 
function initNummer() {
    number.value = 1;
}
 
function deleteItem() {
    addedItem.innerHTML="";
    priceSub=0;
    cnt = 0;
    subTotal.innerHTML = numberWithCommas(priceSub) + "원";
    vatCalc();
    totalCalc();
    document.getElementById("cartButton").innerHTML =`<i class="bi bi-cart4"></i>(${cnt})`;
    document.getElementById("cntCart").innerHTML =`<i class="bi bi-cart4"></i>(${cnt})`;
}
 
function goBack() {
    document.querySelector(".mainimg").style.visibility = "visible";
    document.querySelector(".productPage").style.visibility = "hidden";
     
            
 
    images.forEach(function(image, index) {
        if(image.classList.contains('active')) {
            image.classList.remove("active");
            
        }
        else {
            image.classList.add("active");
            activeIndex = index;  
            
        }
    });
 
    if (activeIndex === 0) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else if (activeIndex === 1) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
 
}
 
 
const cartMenu = document.getElementById('cartMenu');
const overlay = document.getElementById('overlay');
const closeIcon = document.getElementById('closeIcon');
 
 
function openCart(){
    cartMenu.style.right = '0';
    overlay.style.display = 'block';
}
 
function closeCart() {
    cartMenu.style.right = '-500px';
    overlay.style.display = 'none';
}
 
let quantity = document.getElementById("number").value;
function plus() {
    if(quantity<10) quantity++;
    else quantity = 10;
    document.getElementById("number").value = quantity;
}
 
function minus() {
    if(quantity>1) quantity--;
    else quantity =1;
    document.getElementById("number").value = quantity;
}
 
const swimIcon = '<i class="at-swim-shorts"></i>';
const tubeIcon = '<i class="at-life-preserver"></i>';
const boatIcon = '<i class="at-surfboard-surfboarding"></i>';
const gogglesIcon = '<i class="at-snorkling"></i>';
const finsIcon = '<i class="at-flippers"></i>';
 
const swimColors = [
    {color: "빨강색", price: "32000", colorCode : "#D1460B"},
    {color: "주황색", price: "26000", colorCode : "#EA7700"},
    {color: "노란색", price: "38000", colorCode : "#FFB703"},
    {color: "하늘색", price: "24000", colorCode : "#8ECAE6"},
    {color: "파란색", price: "36000", colorCode : "#2571BC"}
];
const tubeColors = [
    {color: "빨강색", price: "16000", colorCode : "#D1460B"},
    {color: "파란색", price: "18000", colorCode : "#2571BC"}
];
const boatColors = [
    {color: "초록색", price: "98000", colorCode : "#0C7738"},
    {color: "하늘색", price: "87000", colorCode : "#8ECAE6"},
    {color: "파란색", price: "90000", colorCode : "#2571BC"},
];
const gogglesColors = [
    {color: "빨강색", price: "24000", colorCode : "#D1460B"},
    {color: "주황색", price: "25000", colorCode : "#EA7700"},
    {color: "하늘색", price: "26000", colorCode : "#8ECAE6"},
    {color: "초록색", price: "24000", colorCode : "#0C7738"},
    
];
const finsColors = [
    {color: "빨강색", price: "45000", colorCode : "#D1460B"},
    {color: "노란색", price: "42000", colorCode : "#FFB703"},
    {color: "파란색", price: "39000", colorCode : "#2571BC"},
];
 
class ColorMenu{
 
    constructor(product) {
        this.product = product;
        this.icon = this.getIcon(product); 
        this.colors = this.getColors(product);
    }
 
    getColors(product) {
        switch (product) {
            case '수영복':
                return swimColors;
            case '튜브':
                return tubeColors;
            case '보트':
                return boatColors;
            case '물안경':
                return gogglesColors;
            case '오리발':
                return finsColors;
            default:
                return [];
        }
    }
 
    getIcon(product) {
        switch (product) {
            case '수영복':
                return swimIcon;
            case '튜브':
                return tubeIcon;
            case '보트':
                return boatIcon;
            case '물안경':
                return gogglesIcon;
            case '오리발':
                return finsIcon;
            default:
                return '';
        }
    }
 
 
    setSelectBox() {
        document.getElementById("productIcon").innerHTML = this.icon;
    
        let str = '<option>색상선택</option>';
        for(let i = 0; i < this.colors.length; i++) {
            str += `<option value="${this.colors[i].color}">${this.colors[i].color}: &nbsp;${numberWithCommas(this.colors[i].price)}원</option>`;
        }
        document.getElementById("farbe").innerHTML = str;
 
    }
}
