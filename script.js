const url = 'https://cat-fact.herokuapp.com/facts/random';
const button = document.querySelector('button');
let showFacts = document.querySelector('.facts'); // the empty p tag to display cat fact

button.addEventListener('click', getFacts);

function getFacts(e) {
    e.preventDefault();

    fetch(url)
    .then(function(result) {
        return result.json();
    }) .then(function(jsonRes) {
        console.log('results from getFacts', jsonRes);
        displayFacts(jsonRes);
    }) .catch(function(err) {
        console.log('fetch error', err)
    })

}

function displayFacts(jsonRes) {
    let facts = jsonRes.text
    console.log(facts);
    showFacts.innerText = facts;
}

