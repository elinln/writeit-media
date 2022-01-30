const dbConfig = require("../config/db.config.js");
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server started on port', port))

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.app = require("./app.model.js")(mongoose);

module.exports = db;