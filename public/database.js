const indexedDb = window.indexedDB;
let db;

async function createDB() {
    let thing = indexedDb.open("offlineTx", 1)
    console.log(thing)
}

let ourDB = createDB()
console.log(ourDB)

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
} else {
    console.log("all good")
}

ourDB.onerror = function (event) {
    console.log("Shit went wrong", event)
    // Do something with request.errorCode!
};
ourDB.onsuccess = function (event) {
    console.log("Shit went right", event)
    // Do something with request.result!
};
