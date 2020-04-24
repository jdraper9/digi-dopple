const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');
const visionClient = new vision.ImageAnnotatorClient();
let Promise = require('promise');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.annotateImage = functions.firestore
  .document('photos/{document}')
  .onCreate((snap, context) => {
    console.log('SNAP', snap);
    console.log('CONTEXT', context);

    const data = snap.data();
    console.log('DATA IN IS', data);
    const photoUrl = 'gs://' + data.bucket + '/' + data.fullPath;
    console.log('url is', photoUrl);

    return Promise.resolve()
      .then(() => {
        return visionClient.textDetection(photoUrl);
      })
      .then(results => {
        console.log('VISION data all is: ', results[0].fullTextAnnotation.text);
        const textDetection = results[0].fullTextAnnotation.text;
        console.log('annotation', textDetection);

        db.collection('photos')
          .doc(context.params.document)
          .update({ textDetection })
          .then(res => console.log('annotation added'))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  });
