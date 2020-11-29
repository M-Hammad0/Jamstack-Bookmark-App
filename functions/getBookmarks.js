const axios = require('axios'); // use nodejs syntax
require('dotenv').config(); // get env variables

exports.handler = async(event) => {


  const GET_BOOKMARKS = ` 
    query{
        allLinks{
        data{
          _id
          title
          url
        }
      }
    }
      `;


  try {
    const { data: {data} } = await axios({
      url: 'https://graphql.fauna.com/graphql', 
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.FAUNADB_SECRET_KEY}`, // must write Bearer
      },
      data: {
        query: GET_BOOKMARKS,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data.allLinks),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      error: JSON.stringify('something went wrong'),
    };
  }
};
