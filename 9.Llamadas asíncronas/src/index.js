import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";


DataBusiness.getCharacters().then(characters => {
    const nodes = [];
    for (let character of characters) {
        const node = Utils.createCharacterRow(character);
        node.onclick = function(){
            handleCharacterClick(character.char_id);
        }
        nodes.push(node);
    }

    if (nodes.length > 0)
        document.getElementById("root").innerHTML = "";

    for (let node of nodes) {
        document.getElementById("root").append(node);
    }
});

let handleCharacterClick = char_id => {
    DataBusiness.getCharacterInfo(char_id).then(characterInfo => {
        document.getElementById("character-detail").append(Utils.showCharacter(characterInfo[0]));
    });
}