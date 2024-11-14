function playRPS()
{
    var player1 = Math.ceil(Math.random()*4);
    var player2 = Math.ceil(Math.random()*4);
    // this is generating 4 random numbers sense i set it to 4
    var number1Image = "number 1";
    var number2Image = "number 2";
    var number3Image = "number 3";
    var number4Image = "number 4";
    // this is where i created the variables
    if (player1 == 1)
        { document.getElementById("player1Img").src = number1Image;}
// this is assigning the player to the image. this section is player one
  else if (player1 == 2)
      { document.getElementById("player1Img").src = number2Image;}

         else if(player1 ==3)
         {document.getElementById("player1Img").src = number3Image;}
         
         else if (player1 ==4)
         {document.getElementById("player1Img").src = number4Image;}

          if (player2 == 1)
        { document.getElementById("player2Img").src = number1Image;}

  else if (player2 == 2)
      { document.getElementById("player2Img").src = number2Image;}
// this section is assignment to player 2
         else if (player2 ==3)
         {document.getElementById("player2Img").src = number3Image;}
         
         else if (player2 ==4)
         {document.getElementById("player2Img").src = number4Image;}
         if (player1 == player2)
            {
                document.getElementById("finalResult").innerHTML = "TIE!";
    
            }
  else if ((player1 == 1 && player2 == 2) || (player1 == 3  && player2 == 2)  || (player1 = 1 && player2 ==4) )
    {
        document.getElementById("finalResult").innerHTML = "player 1 loses the game";
    }
    else { document.getElementById("finalResult").innerHTML = "player 1 wins the game "}

     if (player1 ==2 && player2 ==4) 
       {  document.getElementById("finalResult").innerHTML = "TIE!";} 
// this section is telling which player wins or if its a draw.
}
