// 0
const isDogBetter = true;
const isCatBetter = false;

// 1.a.
// because of short circuiting, using the && operator will return the first falsy value.
console.log(`1.a. ${isDogBetter && isCatBetter}`);

// 1.b.
// because of short circuiting, using the || operator will return the first truthy value.
console.log(`1.b. ${isDogBetter || isCatBetter}`);

// 1.c.
// because of the ! (NOT) operator, the boolean result will be inverted. In this case, using only the && operator would return the first falsy value 'false', but the ! will invert it to output 'true'.
console.log(`1.c. ${!(isDogBetter && isCatBetter)}`);

// 2
const atoms = 2;
const sandGrains = 1e6;
const starsInSky = 1e9;

// 3.a
// There are not more atoms then stars, first operant is false. And not more atoms than sand, also false. The result of this operation using the && operator results the first falsy value found, returning 'false'.
console.log(`3.a. ${atoms > starsInSky && atoms > sandGrains}`);

// 3.b
// atoms is NOT equal to sandGrains, that's correct. Therefore output is 'true'
console.log(`3.b. ${atoms !== sandGrains}`);

// 3.c
// First operant is false, and the second operant is true. Using the || OR operator, will return the first truthy value of this operation. Therefore, the output is 'true' based on the second operant.
console.log(`3.c. ${starsInSky < sandGrains || starsInSky > atoms}`);

// 3.d
// Same as above, first operant is false, and the second operant is true. Using the || OR operator, will return the first truthy value of this operation. Therefore, the output is 'true' based on the second operant.
console.log(`3.d. ${atoms === starsInSky || atoms !== sandGrains}`);

// 3.e
// Both operants in this example are false. Using the && operator will look for the first truthy value. Since there are none, because of short circuiting, it will return the boolean value of the last operant - 'false'.
console.log(`3.e. ${atoms >= 10 && sandGrains <= 10}`);

// 3.f
// both operants in this example are truthy values. The || operator will return the first truthy value found, therefore, output is 'true'.
console.log(`3.f. ${atoms * starsInSky > 100 || atoms * sandGrains > 100}`);
