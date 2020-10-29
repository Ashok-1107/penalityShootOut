let score =[0,1];
var total;
var turn;
var team1  ={
    name:"Barcelona",
    goals:[],
    score:0,
    img:"./photos/Barcelona.png"
};

var team2 ={
    name:"RealMadrid",
    goals:[],
    score:0,
    img:"./photos/RealMadrid.jpg"
};

var team3 ={
    name:"Arsenal",
    goals:[],
    score:0,
    img:"./photos/Arsenal.png"
}

var team4={
  name:"Juventus",
  goals:[],
  score:0,
  img:"./photos/Juventus.jpeg" 
}

var teamA ={

    goals:[],
    score:0,
    name:"",
    

}

var teamB={
    goals:[],
    score:0,
    name:"",
    
}




window.onload =() =>{

    selectTurn1();               //decide the toss and who is gonna bat first
    updateButtonText1();         //update the text of the button based on strike
    updateScore1();              // initial score bord
    updateName1();

    selectTurn2();
    updateButtonText2();         //update the text of the button based on strike
    updateScore2();              // initial score bord
    updateName2();

}

 selectTurn1=()=>{
    console.log("select turn function");
    turn1=Math.round(Math.random())+1;
    console.log(turn1);
    return turn1;
}


updateButtonText1=()=>{
    var button=document.getElementById("strike-button1");
    var result = document.getElementById("result1");
    button.textContent=  `${temp===1?team1.name:team2.name} Strike`;
    // chect wether the game is over
    console.log("here");
    if(team1.goals.length===5 && team2.goals.length===5) {
        button.style.display = "none";
       if(team1.score==team2.score)
       {
            result.innerHTML="Match is a draw";
            resetTeamValues(team1,team2);
            resetIndividualGoals1();
            button.style.display = "block";
            result.innerHTML="";
       }    
       else if(team1.score>team2.score)
       {
            result.innerHTML=team1.name+" has won";
            document.getElementById("team-A-img").setAttribute("src",team1.img);
            document.getElementById("team-A-name").innerHTML=team1.name;
            teamA.name=team1.name;
            
            
            
       }
       else
       {
            result.innerHTML=team2.name+" has won";
            document.getElementById("team-A-img").setAttribute("src",team2.img);
            document.getElementById("team-A-name").innerHTML=team2.name;
            teamA.name=team2.name;

            
       }
    }
}

function resetTeamValues(teamA,teamB)
{
    teamA.goals=[];
    teamB.goals=[];
    teamA.score=0;
    teamB.score=0;
}

selectTurn2=()=>{
    console.log("select turn function");
    turn2=Math.round(Math.random())+1;
    console.log(turn2);
    return turn2;
}





updateButtonText2=()=>{
    var button=document.getElementById("strike-button2");
    var result = document.getElementById("result2");
    button.textContent=  `${temp===1?team3.name:team4.name} Strike`;
    // chect wether the game is over
    console.log("here");
    if(team3.goals.length===5 && team4.goals.length===5) {
        button.style.display = "none";
        var finalResult=document.getElementById("finalMatch");
       if(team3.score==team4.score)
       {
            result.innerHTML="Match is a draw";
            resetTeamValues(team3,team4);
            resetIndividualGoals2();
            button.style.display = "block";
            result.innerHTML="";
       }
       else if(team3.score>team4.score)
       {
            result.innerHTML=team3.name+" has won";
            document.getElementById("team-B-img").setAttribute("src",team3.img);
            document.getElementById("team-B-name").innerHTML=team3.name;
            teamB.name=team3.name;
            selectTurn();
            updateButtonText();
            updateScore();
            updateName();
            finalResult.style.display="flex";
       }
       else
       {
            result.innerHTML=team4.name+" has won";
            document.getElementById("team-B-img").setAttribute("src",team4.img);
            document.getElementById("team-B-name").innerHTML=team4.name;
            teamB.name=team4.name;
            selectTurn();
            updateButtonText();
            updateScore();
            updateName();
            finalResult.style.display="flex";
       }
    }
}

reMatch1=()=>{

    updateButtonText1();         //update the text of the button based on strike
    updateScore1();              // initial score bord
    updateName1();
}

updateScore1=()=>{
    document.getElementById('team-1-score').textContent = team1.score;
    document.getElementById('team-2-score').textContent = team2.score;

}



updateName1=()=>{
    document.getElementById('team-1-name').textContent = team1.name;
    document.getElementById('team-2-name').textContent = team2.name; 
}



function resetIndividualGoals1()
{
    p=0,q=0;
    for(var i=0;i<5;i++)
    {
        scoreList1[i].innerHTML="-";
        scoreList2[i].innerHTML="-";
    }
}

var scoreList1=document.getElementById("team-1-goals").getElementsByTagName('span');
var scoreList2=document.getElementById("team-2-goals").getElementsByTagName('span');
var p=0,q=0;
function updateIndividualGoals1(goal)
{

    if(temp==1)
    {
        scoreList1[p++].innerHTML=goal;
    }
    else
    {
        scoreList2[q++].innerHTML=goal;
    }
}

 var temp=0;
 function handleStrikeButtonClick1() {

    console.log("button click words");
    var goal = score[Math.floor(Math.random()*score.length)];
    // check which team is batting
    updateIndividualGoals1(goal);
   if(temp==1){
       team1.goals.push(goal);
       team1.score= team1.score+goal;
       console.log(team1.score);
       temp=0;
   }
   else 
   {
        team2.goals.push(goal);
        team2.score= team2.score+goal;
        console.log(team2.score); 
        temp=1;
    }
    updateButtonText1();
    setTimeout(updateScore1(), 2000)
    
}

function resetIndividualGoals2()
{
    r=0,s=0;
    for(var i=0;i<5;i++)
    {
        scoreList3[i].innerHTML="-";
        scoreList4[i].innerHTML="-";
    }
}



var scoreList3=document.getElementById("team-3-goals").getElementsByTagName('span');
var scoreList4=document.getElementById("team-4-goals").getElementsByTagName('span');
var r=0,s=0;
function updateIndividualGoals2(goal)
{

    if(tem==1)
    {
        scoreList3[r++].innerHTML=goal;
    }
    else
    {
        scoreList4[s++].innerHTML=goal;
    }
}



 var tem=0;
 function handleStrikeButtonClick2() {

    console.log("button click words");
    var goal = score[Math.floor(Math.random()*score.length)];
    // check which team is batting
    updateIndividualGoals2(goal);
   if(tem==1){
       team3.goals.push(goal);
       team3.score= team3.score+goal;
       console.log(team3.score);
       tem=0;
   }
   else 
   {
        team4.goals.push(goal);
        team4.score= team4.score+goal;
        console.log(team4.score); 
        tem=1;
    }
    updateButtonText2();
    
    setTimeout(updateScore2(), 2000)
    
}


updateScore2=()=>{
    document.getElementById('team-3-score').textContent = team3.score;
    document.getElementById('team-4-score').textContent = team4.score;

}

updateName2=()=>{
    document.getElementById('team-3-name').textContent = team3.name;
    document.getElementById('team-4-name').textContent = team4.name; 
}


selectTurn=()=>{
    console.log("select turn function");
    turn=Math.round(Math.random())+1;
    console.log(turn);
    return turn;
}

updateButtonText=()=>{
    var button=document.getElementById("strike-button");
    var result = document.getElementById("result");
      button.textContent=  `${temp===1?teamA.name:teamB.name} Strike`;
    // chect wether the game is over
    console.log("here");
    if(teamA.goals.length===5 && teamB.goals.length===5) {
        button.style.display = "none";

        if(teamA.score==teamB.score)
       {
            result.innerHTML="Match is a draw";
            resetTeamValues(teamA,teamB);
            resetIndividualGoals();
            button.style.display = "block";
            result.innerHTML="";

            
       }    
       else if(teamA.score>teamB.score)
       {
            result.innerHTML=teamA.name+" has won the final";
            
       }
       else
       {
            result.innerHTML=teamB.name+" has won the final";
            
       }
    }
}

updateScore=()=>{
    document.getElementById('team-A-score').textContent = teamA.score;
    document.getElementById('team-B-score').textContent = teamB.score;

}



updateName=()=>{
    document.getElementById('team-A-name').textContent = teamA.name;
    document.getElementById('team-B-name').textContent = teamB.name; 
}

var scoreListA=document.getElementById("team-A-goals").getElementsByTagName('span');
var scoreListB=document.getElementById("team-B-goals").getElementsByTagName('span');
var c=0,v=0;
function updateIndividualGoals(goal)
{

    if(temp==1)
    {
        scoreListA[c++].innerHTML=goal;
    }
    else
    {
        scoreListB[v++].innerHTML=goal;
    }
}

 var temp=0;
 function handleStrikeButtonClick() {

    console.log("button click words");
    var goal = score[Math.floor(Math.random()*score.length)];
    // check which team is batting
    updateIndividualGoals(goal);
   if(temp==1){
       teamA.goals.push(goal);
       teamA.score= teamA.score+goal;
       console.log(teamA.score);
       temp=0;
   }
   else 
   {
        teamB.goals.push(goal);
        teamB.score= teamB.score+goal;
        console.log(teamB.score); 
        temp=1;
    }
    updateButtonText();
    setTimeout(updateScore(), 2000)
    
}

function resetIndividualGoals()
{
    c=0,v=0;
    for(var j=0;j<5;j++)
    {
        scoreListA[j].innerHTML="-";
        scoreListB[j].innerHTML="-";
    }
}


function finalMatch(){



}