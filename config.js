var config = {}

 config.host = process.env.COSMOSDB_HOST
 config.authKey = process.env.COSMOS_KEY
 config.databaseId = "ToDoList";
 config.collectionId = "Items";

 module.exports = config;