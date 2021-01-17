const graphql = require('graphql'); //import the graphql
const fetch = require("node-fetch");

/* Grabbing special data-structures from GraphQL */
const {
    GraphQLObjectType,
    GraphQLID, 
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = graphql;

const BASE_URL = "https://newsapi.org/v2/";
const API_KEY = "5f435441dfdc4c2f9eed10b141d93da2";
const COUNTRY = "be";
console.log('Base-',BASE_URL)
function fetchResponseByURL(relativeURL, keyword="", method="GET") {
    const arg = {method};
    (keyword!=="") ? limit="" : limit="&pageSize=10";
    const finalUrl = `${BASE_URL}${relativeURL}?country=${COUNTRY}${limit}&q=${keyword}&apiKey=${API_KEY}`;
    console.log(finalUrl);return fetch(finalUrl, arg)
    .then(function(res) {
         return res.json();
      }).then(function(json) {
        return json;
      })
      .catch(function(error) {
        console.log('Error: ', error);
      });
}

function fetchHeadlines(relativeURL, keyword){
    return fetchResponseByURL(relativeURL, keyword).then(json => json.articles.map(headline=>{  return headline; }));
}

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      topHeadlines: {
        type: new GraphQLList(HeadlinesType),
        args: {
            keyword: { type: GraphQLString },
        },
        resolve: (parent, args)=>fetchHeadlines('top-headlines', args.keyword) // Fetch allLaunchPads,
      },
    }),
});

const HeadlinesType = new GraphQLObjectType({
    name: 'Headlines',
    fields: ()=>({
        author: { 
            type: GraphQLString,
            resolve: function(Headline) {
                return Headline.author;
            }
        },
        title: { 
            type: GraphQLString,
            resolve: function(Headline) {
                return Headline.title;
            }
        },
        description: { 
            type: GraphQLString,
            resolve: function(Headline) {
                return Headline.description;
            }
        },
        url: { 
            type: GraphQLString,
            resolve: function(Headline) {
                return Headline.url;
            }
        },
        urlToImage: { 
            type: GraphQLString,
            resolve: function(Headline) {
                return Headline.urlToImage;
            }
        },
        publishedAt: { 
            type: GraphQLString,
            resolve: function(Headline) {
                return Headline.publishedAt;
            }
        },
        content: { 
            type: GraphQLString,
            resolve: function(Headline) {
                return Headline.content;
            }
        },
    })
});

/* Export the schema */
module.exports = new GraphQLSchema({
    query: QueryType
});
