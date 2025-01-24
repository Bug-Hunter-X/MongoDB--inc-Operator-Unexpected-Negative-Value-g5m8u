```javascript
//Correct usage of $inc operator in MongoDB
db.collection('counters').findOneAndUpdate( { _id: 'myCounter' }, { $inc: { sequence: -1 } }, { upsert: true, returnOriginal: false } );
```