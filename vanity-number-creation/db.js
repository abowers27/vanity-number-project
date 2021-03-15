const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const insertVanityNumbers = async (params) => {
  try {
    console.log("connecting to db");
    await docClient.put(params).promise();
  } catch (err) {
    return err;
  }
};

const checkIfExists = async (params) => {
  try {
    console.log("connecting to db");
    return await docClient.get(params).pronise();
  } catch (err) {
    return err;
  }
};

module.exports = { insertVanityNumbers, checkIfExists };
