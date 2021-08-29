const functions = require('firebase-functions');
const firestore = require('@google-cloud/firestore');

exports.jobBackupDatabase = functions
  .pubsub
  .schedule('every 24 hours')
  .timeZone('America/Bogota')
  .onRun(() => {
    const firestoreClient = new firestore.v1.FirestoreAdminClient();
    const bucket = 'gs://cyt-backups';
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const databaseName = firestoreClient.databasePath(projectId, '(default)');

    return firestoreClient.exportDocuments({
      name: databaseName,
      outputUriPrefix: bucket,
      // Leave collectionIds empty to export all collections
      collectionIds: []
    })
      .then(responses => {
        const response = responses[0];
        console.log(`Operation Name: ${response['name']}`);
      })
      .catch(err => {
        console.error(err);
      });
  });
