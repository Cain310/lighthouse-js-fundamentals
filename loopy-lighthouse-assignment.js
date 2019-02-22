for (var num = 100; num < 201; num ++) {
  var checkForThree = num % 3;
  var checkForFour = num % 4;

  if ((checkForThree == 0) && (checkForFour == 0))
  console.log("LoopyLighthouse");

  else if (checkForThree == 0)
    console.log("Loopy");

  else if (checkForFour == 0)
    console.log("Lighthouse");

  else
    console.log(num);

}