var express = require('express');
var app = express();
var db = require('../utils/db');
var http = require('../utils/http');

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/room", function (req, res) {
    console.log("请求url：", req.path)
    console.log("请求参数：", req.query)
    var data = {
        errcode: 0,
        errmsg: '',
        data: [
            {name: 'rooom', age: 12}
        ]
    }
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    res.send(JSON.stringify(data))
})

//获取在线人数
app.get('/roomnum', function (req, res) {
    console.log("请求url：", req.path)
    console.log("请求参数：", req.query)
    db.get_all_roomsid(function (data) {
        if (data != null && data instanceof Array) {
            http.send(res, 0, "ok", data);
            return;
        } else {
            http.send(res, 1, "get message failed.");
            return;
        }
    });
});

exports.start = function ($config) {
    config = $config;
    app.listen(config.ROOM_PORT, config.FOR_ROOM_IP);
    console.log("room service is listening on " + config.FOR_ROOM_IP + ":" + config.ROOM_PORT);
};