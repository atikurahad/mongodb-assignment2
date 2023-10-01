db.createCollection("collectionName")

//2.Remove a collection from the database.

db.collectionName.drop()

//3.Inserts a single document into a collection.
db.collectionName.insertOne()

//4.Delete/remove a single document from the collection.

db.collectionName.deleteOne()