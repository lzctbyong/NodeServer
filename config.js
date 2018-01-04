var HALL_IP = "localhost";
var LOCAL_IP = 'localhost';
var HALL_ROOM_PORT = 9002;
exports.room_server = function () {
    return {
        HALL_IP: HALL_IP,
        CLEINT_PORT: HALL_ROOM_PORT,
        ROOM_PORT: HALL_ROOM_PORT,
        FOR_ROOM_IP: LOCAL_IP,
    };
};
exports.mysql = function () {
    return {
        HOST: "localhost",
        USER: 'root',
        PSD: 'root',
        DB: 'nodejs',
        PORT: 3306,
    }
}