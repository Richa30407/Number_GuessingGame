// Get references to HTML elements we need to interact with
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const messageDisplay = document.getElementById('message');
const attemptsDisplay = document.getElementById('attemptsDisplay');
const restartButton = document.getElementById('restartButton');
// Game state variables
let targetNumber;
let attempts;
let isGameOver;
/**
 * Initializes or resets the game to its starting state
 */
function initGame() {
    // Generate a random number between 1 and 100
    // Math.random() generates betweeen 0 (inclusive) and 1 (exclusive)
    // multiplying by 100 gives 0 to 99.99...
    // Math.floor() rounds down to 0 to 99
    // Adding 1 gives us 1 to 100
    targetNumber = Math.floor(Math.random() * 100) + 1;
    
    // Reset attempts counter
    attempts = 0;
    
    // Game is now active
    isGameOver = false;
    // Reset UI elements to starting state
    messageDisplay.textContent = 'Waiting for your first guess...';
    messageDisplay.style.color = '#333'; // Reset color
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = ''; // Clear the input field
    guessInput.disabled = false; // Re-enable input if it was disabled
    guessButton.disabled = false; // Re-enable button
    
    // Focus the input field so user can start typing immediately
    guessInput.focus();
    
    // (Optional Console log for debugging)
    // console.log("Target number is:", targetNumber);
}
/**
 * Handles the logic when the user clicks the "Guess" button
 */
function handleGuess() {
    // If the game is over, we shouldn't process any more guesses
    if (isGameOver) return;
    // Get the value the user typed in
    const userGuessText = guessInput.value;
    
    // Convert the text input into an actual number
    const userGuess = parseInt(userGuessText, 10);
    // Validate the input: ensure it is a number and within range
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = 'Please enter a valid number between 1 and 100.';
        messageDisplay.style.color = '#ff4757'; // Highlight error in red
        return; // Stop further execution for this guess
    }
    // Valid guess: increment attempts
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    // Compare the user's guess to the target number
    if (userGuess === targetNumber) {
        // User guessed correctly!
        messageDisplay.textContent = 'You guessed it! 🎉';
        messageDisplay.style.color = '#2ed573'; // Green for success
        endGame();
    } else if (userGuess > targetNumber) {
        // Guess was too high
        messageDisplay.textContent = 'Lower number please.';
        messageDisplay.style.color = '#ffa502'; // Orange/yellow for hint
    } else if (userGuess < targetNumber) {
        // Guess was too low
        messageDisplay.textContent = 'Higher number please.';
        messageDisplay.style.color = '#ffa502'; // Orange/yellow for hint
    }
    // Clear the input field for the next guess
    guessInput.value = '';
    guessInput.focus();
}
/**
 * Ends the game by disabling inputs
 */
function endGame() {
    isGameOver = true;
    guessInput.disabled = true;
    guessButton.disabled = true;
}
// === Event Listeners ===
// Listen for clicks on the Guess button
guessButton.addEventListener('click', handleGuess);
// Optional: allow guessing by pressing "Enter" key in the input field
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});
// Listen for clicks on the Restart button
restartButton.addEventListener('click', initGame);
// Start the game for the first time when the script loads
initGame();