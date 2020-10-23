let score =[0,1];
console.log(score);
var turn;
var team1  ={
    name:"Barcelona",
    Goals:[],
    score:0,

};
console.log(team1);

var team2 ={
    name:"RealMadrid",
    Goals:[],
    score:0,

};
console.log(team2);

window.onload =() =>{
    selectTurn();//decide the toss and who is gonna bat first
    updateButtonText();//update the text of the button based on strike
    updateScore();// initial score bord
    updateName();
}

 selectTurn=()=>{
    console.log("select turn function");
    turn=Math.round(Math.random())+1;
    console.log(turn);
}
updateButtonText=()=>{
    var button=document.getElementById("strike-button");
    console.log(button);
    button.textContent= (turn===1?team1.name:team2.name);
}

updateScore=()=>{
    document.getElementById('team-1-score').textContent = team1.score;
    document.getElementById('team-2-score').textContent = team2.score;

}

updateName=()=>{
    document.getElementById('team-1-name').textContent = team1.name;
    document.getElementById('team-2-name').textContent = team2.name;
}

