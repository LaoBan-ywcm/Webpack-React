const config = require('./config.json');


module.exports = function() {
    const greet = document.createElement('div');
    greet.textContent = config.greeterText;
    return greet;
}

