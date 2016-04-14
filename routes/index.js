module.exports = function (app) {
    require("./home")(app);
    require("./auth")(app);
    require('./db')(app);
};
