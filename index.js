let count1 = 0
let count2 = 0
function ent1(){
    count1+=1
    document.getElementById("dis1").innerText = count1
    winner()
}
function sv1() {
    console.log(count1)
    count1 = 0
    document.getElementById("dis1").innerText = 0
}
function ent2(){
    count2+=1
    document.getElementById("dis2").innerText = count2
    winner()
}
function sv2() {
    console.log(count2)
    count2 = 0
    document.getElementById("dis2").innerText = 0
}
function winner(){
    if(count1>count2){
        document.getElementById("win").textContent = "WINNER: Player1"
    }
    else if (count1==count2){
        document.getElementById("win").textContent = "Its a Tie"
    }
    else{
        document.getElementById("win").textContent = "WINNER: Player2"
    }
    
}