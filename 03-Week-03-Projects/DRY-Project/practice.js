let smaller;
let bigger;

function multiplyBiggerNumByTwo(num1, num2) {
    let bigNum = biggerorSmaller(num1, num2);
    return bigger * 2;
}

  function divideBiggerNumByThree(num1, num2) {
    let bigNum = biggerorSmaller(num1, num2);
    return bigger / 3;
  }

  function eatMostTacos(sum1, sum2) {
    let bigNum = biggerorSmaller(sum1, sum2);
    return  `I ate ${bigger} tacos.`;
  }

  function adoptSmallerDog(weight1, weight2) {
    let smallDog = biggerorSmaller(weight1, weight2);
      return `I adopted a dog that weighs ${smaller} pounds.`;
}

  function biggerorSmaller(num1, num2) {
    if (num1 < num2) {
        smaller = num1;
        bigger = num2;
    } else {
        smaller = num2;
        bigger = num1;
    }
    return smaller, bigger;
  }



/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
