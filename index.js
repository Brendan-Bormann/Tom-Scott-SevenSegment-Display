const fs = require('fs');

// this function checks every words against dicionary
function checkLettersForSevenSegmentDisplay(dictionary)
{
    // current longest word that fits match
    let currentLongestWord = '';

    // method ot check word length --- to save time and stay DRY
    let charactersInWord = word => word.length;

    // possible letter input
    const possibleLetters = 'abcdefhijlnoprsuy'.split('');

    // loop all words in dictionary parameter
    for (let i = 0; i < dictionary.length; i++)
    {
        // store letter count of current word
        let count = dictionary[i].length;

        // loop all letters in current word
        for (let j = 0; j < dictionary[i].length; j++)
        {
            // check if current word is longer than stored longest word
            if (charactersInWord(dictionary[i]) <= charactersInWord(currentLongestWord))
            {
                // if the word isn't longer, exit loop for current word, and start next
                break;
            }

            // if current words current letter is a possible letter, retain that info
            if (possibleLetters.includes(dictionary[i][j]))
            {
                count--;
            }

            // count will equal 0 if all letters have been found
            if (count === 0)
            {
                // set the new longest current word 
                currentLongestWord = dictionary[i];
            }
        }
    }

    // let the user know the longest word!
    console.log("----------------");
    console.log(currentLongestWord);
    console.log("----------------");
}

// Create dictionary
let dictionary;

// read dictionary .txt and populate dictionary array
fs.readFile('words.txt', 'utf8', function(err, data) {

    // error handle
    if (err) console.log(err);

    // if no error then set dicionary to array of all words
    else dictionary = data.split('\n');

    // call check function
    checkLettersForSevenSegmentDisplay(dictionary);
});
