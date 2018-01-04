var room_service = require("./room");
var db = require('../utils/db');
var config = require("../config")
db.init(config.mysql());
room_service.start(config.room_server());