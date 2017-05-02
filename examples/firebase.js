var admin = require("firebase-admin");
var serviceAccount = require("../firebase-config.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://browser-sync-record.firebaseio.com"
});

var obj = {};
for (var i = 0; i < 10; i++) {
    obj['timestamp-' + i] = new Date().getTime();

    (function (num) {
        admin.database().ref('rec-1' + '/' + obj['timestamp-' + num]).set({
            event: 'event ' + num,
            data: 'data ' + num
        });
    })(i);
}
