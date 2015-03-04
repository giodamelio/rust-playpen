var baobab = require("baobab");

var store = new baobab({
    settings: {
        theme: {
            caption: "Monokai",
            isDark: true,
            name: "monokai",
            theme: "ace/theme/monokai"
        }
    }
});

module.exports = store;

