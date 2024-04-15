let img=document.getElementById("img");
let scissors=document.getElementById("scissors");
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let score=document.getElementById("score");
let user_score=document.getElementById("user_score");
let computer_score=document.getElementById("computer_score");
let reset_btn = document.getElementById("reset_btn");
let end_btn = document.getElementById("end_btn");

let imgArray= new Array();
imgArray[0]="images/paper.png"
imgArray[1]="images/rock.png";
imgArray[2]="images/scissors.png";

let rand;
let user=0;
let computer=0;

function imageRand()
{
    rand = Math.floor(Math.random()*3);
    img.src=imgArray[rand];   
}
setInterval(imageRand,150);

scissors.onclick = ()=>{
    clearInterval();
    if(rand==0) {
        alert("승리");
        user++;
        user_score.textContent=user;
    }
    else if(rand==2) {
        alert("비겼습니다.");
    }
    else {
        alert("패배");
        computer++;
        computer_score.textContent=computer;        
    }
    
}

rock.onclick= () =>{
    clearInterval();
    if(rand==0) {
        alert("패배");
        computer++;
        computer_score.textContent=computer;  
    }
    else if(rand==2) {
        alert("이겼습니다.");
        user++;
        user_score.textContent=user;
    }
    else {
        alert("비겼습니다.");
    }
}

paper.onclick=()=>{
    clearInterval();
    if(rand==0) {
        alert("비겼습니다");
    }
    else if(rand==2) {
        alert("패배.");
        computer++;
        computer_score.textContent=computer;  
    }
    else{
        alert("이겼습니다.");
        user++;
        user_score.textContent=user;
    }
}

reset_btn.onclick=()=>{
    let check=confirm("다시 시작하시겠습니까?");
    if(check==true) {
        location.reload();
    }
}

end_btn.onclick=()=>{
    let check=confirm("게임을 종료하시겠습니까?");
    if(check==true) {
        alert("게임 승리 : " + user  + " 게임 패배 : " + computer);
        location.reload();
    }
}