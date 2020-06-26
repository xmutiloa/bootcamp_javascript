function getCharacters() {
    return fetch("https://breakingbadapi.com/api/characters").then(response =>
        response.json()
    );
}

function getCharacterInfo(char_id) {
    return fetch("https://breakingbadapi.com/api/characters/" + char_id).then(response =>
        response.json()
    );
}

export {getCharacters, getCharacterInfo}