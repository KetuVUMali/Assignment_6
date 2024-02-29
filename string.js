
function capitalWords() {
                            const inputSentence = document.getElementById('str').value;
                          const result = inputSentence.charAt(0).toUpperCase() + inputSentence.slice(1);
                          displayResult(result);
                        }
function existenceCheck() {
                            const inputWord = prompt('Enter a word to check existence:');
                            const inputSentence = document.getElementById('str').value;
                            const result = inputSentence.includes(inputWord);
                            displayResult(result ? 'True' : 'False');
                          }

function occurrenceCount() {
                            const inputWord = prompt('Enter a word to count occurrences:');
                            const inputSentence = document.getElementById('str').value;
                            const result = (inputSentence.match(new RegExp('\\b' + inputWord + '\\b', 'gi')) || []).length;
                             displayResult(`Word "${inputWord}" occurs ${result} times`);
                          }

function densityCalc() {
                        const inputSentence = document.getElementById('str').value;
                        const words = inputSentence.split(/\s+/).filter(word => word.trim() !== '');
                        const occurrenceCount = words.length;
                        const totalWords = new Set(words).size;
                        const density = (occurrenceCount / totalWords * 100).toFixed(2);
                        displayResult(`Word Density: ${density}%`);
                       }

function fileExtration() {
                            const inputFileName = document.getElementById('myfile').value;
                            const result = inputFileName.split('.').pop() || null;
                            displayResult(result ? `File Extension: ${result}` : 'No file extension found');
                          }

function whitespaceRemove() {
                              const inputSentence = document.getElementById('str').value;
                              const result = inputSentence.replace(/\s/g, '');
                              displayResult(`Result after removing whitespace: "${result}"`);
                            }

function reverseWords() {
                          const inputSentence = document.getElementById('str').value;
                          const result = inputSentence.split(' ').reverse().join(' ');
                          displayResult(`Reversed sentence: "${result}"`);
                        }

function vowelsCount() {
                          const inputSentence = document.getElementById('str').value;
                          const result = (inputSentence.match(/[aeiou]/gi) || []).length;
                          displayResult(`Number of vowels: ${result}`);
                        }

function isPalindrome() {
                          const inputSentence = document.getElementById('str').value;
                          const cleanedString = inputSentence.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
                          const reversedString = cleanedString.split('').reverse().join('');
                          const result = cleanedString === reversedString;
                          displayResult(result ? 'It is a palindrome' : 'It is not a palindrome');
                        }

function truncateString() {
                            const maxLength = prompt('Enter the maximum length:');
                            const inputSentence = document.getElementById('str').value;
                            const result = inputSentence.length > maxLength
                              ? inputSentence.substring(0, maxLength) + '...'
                              : inputSentence;
                            displayResult(result);
                          }
function maskingString() {
                            const inputSentence = document.getElementById('str').value;
                            const maskedString = inputSentence.replace(/\d(?=\d{4})/g, '*');
                            displayResult(`Masked String: "${maskedString}"`);
                          }

function emailValidation() {
                             const inputEmail = document.getElementById('str').value;
                             const result = /\S+@\S+\.\S+/.test(inputEmail);
                             displayResult(result ? 'Valid Email Address' : 'Invalid Email Address');
                           }

function displayResult(result) {
                                 document.getElementById('outputResult').innerText = result;
                               }



function callFunction(val){
  switch (val){
    case "1" :
      capitalWords();
        break;
    case "2" :
      existenceCheck();
        break;
    case "3" :
      occurrenceCount();
        break;
    case "4" :
      densityCalc();
        break;
    case "5" :
          break;
    case "6" :
      whitespaceRemove();
      break;
    case "7" :
      reverseWords();
      break;
    case "8" :
      vowelsCount();
      break;
    case "9" :
      isPalindrome();
      break;
    case "10" :
      truncateString();
      break;
    case "11" :
      maskingString()
      break;
    case "12" :
      emailValidation();
      break;
    default:
      break;
  }
}
