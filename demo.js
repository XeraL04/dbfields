const {MongoClient} = require('mongodb')

async function main(){

    const uri = "mongodb://hamid:qwerty@localhost/active_tracking";

    const client = new MongoClient(uri);
    
    try{
        await client.connect();
        
        // await listDatabases(client);
        
        // await findOneListByName(client )
        
        // await findTheNumberOfdocs(client )
        
        // await findAllDocs(client )
        

        // await getTheImei(client);
        
        // await collectionNumber(client)
        
        await listCollection(client)

    } catch(e){
        console.error(e);
    } finally{
        await client.close();
    }
}

// main().catch(console.error);

// async function listDatabases (client){
//     const databasesList = await client.db().admin().listDatabases();
    
//     console.log("Databases:");
//     databasesList.databases.forEach(db=>{
//         console.log(`-${db.name}`);
//     });
// }
   
const uri = "mongodb://hamid:qwerty@localhost/active_tracking";
MongoClient.connect(uri, function (err, db){
    if (err) throw err;
    let dbat = db.db("active_tracking");
    dbat.listCollections().toArray(function (err, collectionInfos){
        //console.log(collectionInfos[0].name);
        collectionInfos.forEach(elmnt => {
                    console.log(elmnt.name)
                
                });

       
    });
    db.close;
});
        
// async function findOneListByName(client, nameOfListing){
//     const result = await client.db("active_tracking").collection("data_3546365045555737401").findOne({});        
//     if (result) {
//         console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
//         console.log(result);
//     } else{
//         console.log(`No listing results found with the name '${nameOfListing}'`);
//     }
// }

// function findeAll (client){
// }
// async function findTheNumberOfdocs(client, nameOfListing){
//     const result = await client.db("active_tracking").collection("data_3546365045555737401").find().count();

//     if (result) {
//         console.log(`Found :`);
//         console.log(result);
//     } else{
    //         console.log(`No results found`);
    //     }
// }

// async function findAllDocs(client, nameOfListing){
    
//     const cursor = client.db("active_tracking").collection("data_3546365045555737401").find();

//     const result = await cursor.toArray();

//     if (result) {
    //         console.log(`Found :`);
//         console.log(result);
//     } else{
//         console.log(`No results found`);
//     }
// }

// async function getTheImei(client){
//     try{
//         const result = await client.db("active_tracking").collection("data_3546365045555737401").aggregate([{$group:{_id:"$imei", count:{$sum:1}}}]) ;
//         //console.log(result) ;
//         for await (const doc of result) {
//             //console.log("the imei is : " + doc._id  );
//             if(doc._id != null){
//                 console.log(doc._id + " // " + doc.count) ;
//             }
//         }
//     }catch(e){
//         console.log(e.error) ;
//     }
// }
