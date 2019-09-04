export function capitalize(phrase) {
    let firstLetter = phrase.slice(0, 1);
    return firstLetter.toUpperCase().concat(phrase.substr(1));
}

export function unCamelCase(word) {
    let result = "";
    for(let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        if (currentLetter === currentLetter.toUpperCase()) {
            result += " " + currentLetter;
        } else {
            result += currentLetter;
        }
    }
    return result.trim();
}