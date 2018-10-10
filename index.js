const fs = require('fs');

let dictionary;





function checkLettersForSevenSegmentDisplay(dictionary)
{
    let currentLongestWord = '';
    let charactersInWord = word => word.length;

    const possibleLetters = 'abcdefhijlnoprsuy'.split('');

    for (let i = 0; i < dictionary.length; i++)
    {
        let count = dictionary[i].length;

        for (let j = 0; j < dictionary[i].length; j++)
        {

            if (charactersInWord(dictionary[i]) <= charactersInWord(currentLongestWord))
            {
                break;
            }

            if (possibleLetters.includes(dictionary[i][j]))
            {
                count--;
            }

            if (count === 0)
            {
                currentLongestWord = dictionary[i];
            }
        }
    }
    console.log("----------------");
    console.log(currentLongestWord);
    console.log("----------------");
}


fs.readFile('words.txt', 'utf8', function(err, data) {
    if (err) console.log(err);

    else dictionary = data.split('\n');

    checkLettersForSevenSegmentDisplay(dictionary);
});
