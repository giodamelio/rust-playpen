var Store = require("./store");

module.exports = {
    run() {
        console.log("Running rust code");
    },
    setTheme(theme) {
        Store.select("settings", "theme").edit(theme);
    }
};

