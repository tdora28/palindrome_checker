import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');

  const checkPalindrome = (input) => {
    let text = cleanInput(input);
    if (text.length === 0) return '';
    let falseCounter = 0;
    for (let i = 0; i < Math.ceil(text.length / 2); i++) {
      let j = text.length - 1 - i;
      if (text[i] !== text[j]) {
        falseCounter++;
        break;
      }
    }
    return falseCounter > 0 ? 'not palindrome' : 'palindrome';
  };

  const cleanInput = (susInput) => {
    const cleaned = susInput.replace(/[^A-Z0-9]+/gi, '').toLowerCase();
    return cleaned;
  };

  return (
    <>
      <main>
        <h1>Palindrome Checker</h1>
        <input type='text' id='userInput' value={userInput} placeholder='Type here...' onChange={(e) => setUserInput(e.target.value)} />
        <div className='result'>{checkPalindrome(userInput)}</div>
      </main>
    </>
  );
}

export default App;
