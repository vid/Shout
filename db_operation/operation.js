// from configurations in App.jsx
var db = new PouchDB('resourcesnew');
var remoteCouch = 'https://generaluser:pass@shoutapp.org:6984/resourcesnew';
PouchDB.sync('db', 'remoteCouch');

// the list of objects to be changed
var list = [];

for (var i = 0; i < list.length; i++) {

    // deletion
    db.get(list[i]["_id"]).then(function(doc) {
      return db.remove(doc);
    }).then(function (result) {
      console.log("delete");
    }).catch(function (err) {
      console.log(err);
    });

    // updation or add
    db.put(list[i], function callback(err, result) {
        if (!err) {
            console.log('Added resource');
        } else {
            console.log('Error adding resource' + err);
        }
    });


}

// synchronize local and remote
PouchDB.sync('db', 'remoteCouch');