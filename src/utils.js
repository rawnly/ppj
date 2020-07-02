const chalk = require('chalk');

/**
 * @name highlightJSON
 * @description Highlight json
 * @param {Object} data
 * @param {Object} options
 */
const highlightJSON =  (data, { 
    brackets = 'dim', 
    strings = 'green', 
    digits = 'cyan', 
    falsy = 'dim',
    boolean = 'magenta', 
} = {}) => {
    // TODO: Find a regex that matches the key of the json
    
    let jsonString = JSON.stringify(data, null, 2);

    jsonString = jsonString.replace(/[\{|\}|\,|\:|\[|\]]+/g, chalk`{${brackets} $&}`);
    jsonString = jsonString.replace(/\".*?\"/g, chalk`{${strings} $&}`);
    jsonString = jsonString.replace(/(\s+)(\d+)/g, chalk`$1{${digits} $2}`);
    jsonString = jsonString.replace(/null|undefined|NaN/gi, chalk`{${falsy} $&}`);
    jsonString = jsonString.replace(/true|false/gi, chalk`{${boolean} $&}`);

    return jsonString;
}

/**
 * @param {String} json 
 */
module.exports.prettyPrint = function prettyPrint(json) {
    try {
        const data = JSON.parse(json)

        console.log( highlightJSON(data) );
    } catch (error) {
        console.error(chalk`{red {bold Invalid JSON}}`);
        console.log();
    }
}

/**
 * Handle no arguments error
 */
module.exports.noArgsError = () => console.error(chalk`{bold {red ERROR! No enought arguments!}}`)
