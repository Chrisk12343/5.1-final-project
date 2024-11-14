function validate()
{
    var fname = document.getElementById("initString").value;
    var lname = document.getElementById("str2").value;
    var num = document.getElementById("firstNum").value;
    var FullName = fname+ " "+ lname;
    // these are all the variables
    document.getElementById("inputStatus").innerHTML = FullName
    // this is so the first name and last name get combined
    document.getElementById("numberinputstatus").innerHTML = num
    // this is telling where the number goes 

    if (FullName.length <=6)
    [document.getElementById("inputStatus").innerHTML = "Name not Long Enough"]
// this if statment means that the fullname cant be less then 6
 if (num <100)
{
    document.getElementById("numberinputstatus").innerHTML = "Number is not Long Enough"
}
else if (num >99999 )
{document.getElementById("numberinputstatus").innerHTML = "Number is too Long"}
// these if staments for the numbers made it so the number has to be over 100 but less then 99999
}