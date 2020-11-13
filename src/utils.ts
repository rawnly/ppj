import chalk from 'chalk'

interface HighlightOptions {
    brackets?: string;
    strings?: string;
    digits?: string;
    falsy?: string;
    boolean?: string;
}

const highlightJSON =  (data: any, {
    brackets = 'dim',
    strings = 'green',
    digits = 'cyan',
    falsy = 'dim',
    boolean = 'magenta',
}: HighlightOptions = {}) => {
    // TODO: Find a regex that matches the key of the json

    let jsonString = JSON.stringify(data, null, 2);

    jsonString = jsonString.replace(/[\{|\}|\,|\:|\[|\]]+/g, chalk`{${brackets} $&}`);
    jsonString = jsonString.replace(/\".*?\"/g, chalk`{${strings} $&}`);
    jsonString = jsonString.replace(/(\s+)(\d+)/g, chalk`$1{${digits} $2}`);
    jsonString = jsonString.replace(/null|undefined|NaN/gi, chalk`{${falsy} $&}`);
    jsonString = jsonString.replace(/true|false/gi, chalk`{${boolean} $&}`);

    return jsonString;
}

// pretty print data
export const prettyPrint = (json: string) => {
    try {
        console.log( highlightJSON(JSON.parse(json)) );
    } catch (error) {
        console.error(chalk`{red {bold Invalid JSON}}`);
        console.log();
    }
}

// no args error
export const noArgsError = () => console.error(chalk`{bold {red ERROR! No enought arguments!}}`)
