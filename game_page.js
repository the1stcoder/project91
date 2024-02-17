player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player1_score= 0;
player2_score= 0;
question_turn= "player1";
answer_turn="player2";

document.getElementById("player1_name").innerHTML= player1_name + " : ";
document.getElementById("player2_name").innerHTML= player2_name + " : ";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question Turn: "+ player1_name; 
document.getElementById("player_answer").innerHTML= "Answer Turn: "+ player2_name;

function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    question_number= "<h4>" + number1 + "X" + number2 +"</h4>";
    answer_tag= '<br> Answer : <input id="input_check_box" type="text">';
    button_tag= '<br><br> <button class="btn btn-info" onclick="check()"> Check </button>';
    row= question_number+answer_tag+button_tag;
    document.getElementById("output").innerHTML= row;
    document.getElementById("num1").value= "";
    document.getElementById("num2").value= "";
}

function check(){
    get_answer= document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answer_turn=="player1"){
            player1_score++;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else{
             player2_score++;
             document.getElementById("player2_score").innerHTML= player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML= "Question Turn: "+ player2_name; 
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML= "Question Turn: "+ player1_name; 
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML= "Answer Turn: "+ player2_name; 
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML= "Answer Turn: "+ player1_name; 
    }
    document.getElementById("output").innerHTML= "";
}