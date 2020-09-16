'use strict';

module.exports.hello = async event => {
  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: body.data.map((row) => [row[0], 'hello from lambda'])
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
