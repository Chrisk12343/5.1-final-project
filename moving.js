var change = 100;
var intervalidID = 0;
// varables

function intervalStart()
{
    document.getElementById("StopButton").disabled = false;
    document.getElementById("StartButton").disabled = true;
    // these make it so when when i hit start it disables the button
    var image = document.getElementById("img");
    intervalidID = setInterval(function() 
    {
      image.style.left = change + "px";
      image.style.top = change + "px";
    //   this is moving the image down and to the right by 3

        change +=3; 


    },500);  

}

function intervalStop()
{
    document.getElementById("StopButton").disabled = true;
    document.getElementById("StartButton").disabled = false;
    // when i hit stop the stop buttom disables
    clearInterval(intervalidID);
}