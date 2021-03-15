const db = require("./db");
const helpers = require("./helpers");

exports.lambdaHandler = async (event) => {
  const table = process.env.table;
  let contactNumber = event.Details.Parameters.customerNumber;

  const getParams = {
    Key: {
      ContactNumber: contactNumber,
    },
    TableName: table,
  };

  // check if number already exists in DB
  const res = await db.checkIfExists(getParams);

  // if number already in DB, skip algorithms and return vanity numbers from DB
  if (res.Item) {
    const VanityNumbers = res.Item.VanityNumbers;
    let resString =
      "Your best vanity numbers are " +
      VanityNumbers[0] +
      ", " +
      VanityNumbers[1] +
      ", and " +
      VanityNumbers[2];

    const response = {
      vanityNumbers: resString,
    };

    return response;
  }

  // extract area code and assign letters to given number
  const lettersArr = helpers.assignLetters(contactNumber);

  // returns all possible vanity numbers
  let allVanityNums = helpers.getVanityOptions(lettersArr);

  // SORTS SOLUTIONS BY LEAST UNIQUE CHARACTERS FIRST, THEN ALPHABETICALLY
  // THEN ASSIGNS BEST 5 TO VARIABLE 'finalSolutions'
  const bestNums = allVanityNums
    .sort((a, b) => {
      return helpers.uniqueCount(a) - helpers.uniqueCount(b);
    })
    .splice(0, 5);

  const params = {
    TableName: table,
    Item: {
      ContactNumber: contactNumber,
      VanityNumbers: bestNums,
    },
  };

  let resString =
    "Your best vanity numbers are " +
    bestNums[0] +
    ", " +
    bestNums[1] +
    ", and " +
    bestNums[2];

  const response = {
    vanityNumbers: resString,
  };

  try {
    // insert vanity numbers into dynamoDB
    await db.insertVanityNumbers(params);
    return response;
  } catch (err) {
    return { error: err };
  }
};
