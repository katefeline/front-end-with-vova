const birthYear = +prompt('Enter the year you were born', '');
let city;
let favouriteSport;
let information = '';

if (birthYear) {
    information += `So you were born in ${birthYear} \n`;
    city = prompt('In what city do you live?', '');
    if (city) {
        if (city === 'Kyiv') {
            information += 'Congrats on living in the capital of Ukraine.\n';
        } else if (city === 'London') {
            information += 'Congrats on living in the capital of United Kingdom.\n';
        } else if (city === 'Warsaw') {
            information += 'Congrats on living in the capital of Poland.\n';
        } else {
            information += `Congrats on living in ${city}.\n`;
        }
        favouriteSport = prompt('What is your favourite sport?', '');
            if (favouriteSport === 'swimming') {
                information += 'Cool! So you want to be just like Michael Phelps!';
            } else if (favouriteSport === 'tennis') {
                information += 'Cool! So you want to be just like Rafael Nadal!';
            } else if (favouriteSport === 'football') {
                information += 'Cool! So you want to be just like all those sweaty golden starts!';
            } else if (!favouriteSport) {
                alert('You nasty secret bastard');
            } else {
                information += `So you want to be like champion of ${favouriteSport}!`;
            }
    } else {
        alert('It\'s a real tragedy that you don\'t want to share information about the city you live');
    }
} else {
    alert('It\'s a pity you don\'t want to enter your year of birth');
}
if (information === null) {
    alert('You are a piece of shit');
} else {
    alert(information);
}
