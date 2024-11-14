function strings()
{
    var string1 = document.getElementById("string1").value;

    var splitStr = string1.split("");
    // this spilts the word
    var reverseStr = splitStr.reverse();
// this reverses the word
    var joinStr = reverseStr.join("");
    // then joins it back together
// all the variables

    if (string1 == joinStr)
        // the if statments
    {
      document.getElementById("string info").innerHTML = "Its a Palindrome"
      // basically if the orignal string is = or the exact same to the new string/word
    // thats created. then its a palindrome
    }
    else{
       document.getElementById("string info").innerHTML = "Its not a Palindrome"
    }
    // if it isnt then its not
}