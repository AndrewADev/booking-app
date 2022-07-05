const { MongoClient, ServerApiVersion } = require("mongodb");

/**
 * Configure a MongoClient
 *
 * @param uri URI to use to connect
 * @returns Configured Mongoclient
 */
function createClient(uri: string) {
  return new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
  });
}

/**
 * Connect to the database
 *
 * @param uri URI of the Server
 * @param database Database name to use
 * @returns configured database (on success)
 */
async function connectToDatabase(uri: string, database: string) {
  const client = createClient(uri);

  try {
    await client.connect();

    const db = client.db(database);
    console.log("Established connection to MongoDB");
    return {
        db,
        close: () => client.close()
    };
  } catch (exception: any) /* TODO: types */ {
    console.error("Caught error: ", exception);
    await client.close();
  }
}

export { connectToDatabase };
