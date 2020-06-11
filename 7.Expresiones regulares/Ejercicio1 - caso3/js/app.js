const pattern = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/;
                 
const values = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.exec(value));  
});