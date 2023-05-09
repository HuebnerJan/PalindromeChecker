// Function to check for a Palindrome
function checkPalindrome(str) {

    // First replace all non-alphanumeric chars
    str = str.replace(/[^a-z0-9]/gi,'')
    // Make it all lower case
    str = str.toLowerCase()
    // Check for symmetry:
    for (let char=0; char<=Math.floor(str.length);char++) {
        // If the String is not symmetrical, return false
        if (str[char] != str[str.length-char-1]) {
            return false
        }
    }
    // Else return true
    return true
}

var check = document.getElementById('check');
var insp = document.getElementById('insp');
var text = document.getElementById('text')
const pals = ['Sit on a potato pan, Otis',
    'Ah. Satan sees Natasha.',
    'Cigar? Toss it in a can. It is so tragic.',
    'Did Hannah see bees? Hannah did.',
'Yo, banana boy!',
'Oh, who was it I saw? Oh, who?',
'Murder for a jar of red rum',
'Borrow or rob?',
'Eva, can I see bees in a cave?','Poor Dan is in a droop',
'Oozy rat in a sanitary zoo','Step on no pets'];

check.addEventListener('click',function () {
    let input = document.getElementById('text').value;
    colorButton(checkPalindrome(input));
} )
function colorButton(result) {
    if (result) {
        check.style.color='green';
        check.innerHTML ='Palindrome';
    }
    else {
        check.style.color='red';
        check.innerHTML='No Palindrome';
    }
}

text.addEventListener('keypress', function() {
    check.style.color='black';
    check.innerHTML ='Check';
    text.style.color = 'black';
})

insp.addEventListener('click',function() {
    let randPal = pals[Math.floor(pals.length*Math.random())];
    text.style.color = 'darkgreen';
    text.value = randPal;
})

let helpText = document.getElementById('help-text')
let help = document.getElementById('help');
help.addEventListener('click', function () {

    if (helpText.style.display=='none') {
        helpText.style.display='block';
    }
    else {
        helpText.style.display='none';
    }

})





