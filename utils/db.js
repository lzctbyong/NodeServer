var mysql = require("mysql");
var crypto = require('./crypto');


function nop(a, b, c, d, e, f, g) {

}

function query(sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接  
                conn.release();
                //事件驱动回调  
                callback(qerr, vals, fields);
            });
        }
    });
};

exports.init = function (config) {
    pool = mysql.createPool({
        host: config.HOST,
        user: config.USER,
        password: config.PSD,
        database: config.DB,
        port: config.PORT
    });
};

exports.get_all_roomsid = function (callback) {
    callback = callback == null ? nop : callback;
    var sql = 'SELECT userid FROM t_users';
    query(sql, function (err, rows, fields) {
        if (err) {
            callback(null);
            throw err;
        }
        else {
            callback(rows);
        }
    });
};

exports.query = query;