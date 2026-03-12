/* Import a modern font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
/* Reset default margin and padding for a clean slate */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* Base styles for the entire page */
body {
    font-family: 'Inter', sans-serif;
    /* Create a beautiful gradient background */
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
}
/* The main game container acting as a card */
.game-container {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 450px;
    width: 90%;
    /* Subtle animation on load */
    animation: fadeIn 0.6s ease-out;
}
/* Title styling */
h1 {
    font-weight: 800;
    color: #1e3c72;
    margin-bottom: 10px;
    font-size: 28px;
}
/* Instructions styling */
.instructions {
    color: #666;
    margin-bottom: 30px;
    font-size: 16px;
}
/* Grouping input and guessing button */
.input-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 25px;
}
/* Style for the number input */
input[type="number"] {
    padding: 12px 20px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 8px;
    width: 60%;
    outline: none;
    transition: border-color 0.3s ease;
    font-family: 'Inter', sans-serif;
}
input[type="number"]:focus {
    border-color: #2a5298; /* Highlight on focus */
}
/* General button styling */
button {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
}
/* Specific styling for the Guess button */
#guessButton {
    background-color: #2a5298;
    color: white;
}
#guessButton:hover {
    background-color: #1e3c72;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(42, 82, 152, 0.3);
}
/* Area displaying feedback messages */
.status-area {
    margin-bottom: 25px;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 12px;
}
/* Feedback message text */
#message {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    min-height: 27px; /* Prevent layout jump */
}
/* Attempts counter text */
#attemptsDisplay {
    font-size: 14px;
    color: #555;
    font-weight: 600;
}
/* Restart game button styling */
#restartButton {
    background-color: #ff4757;
    color: white;
    width: 100%;
}
#restartButton:hover {
    background-color: #ff6b81;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(255, 71, 87, 0.3);
}
/* Simple fade-in animation keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* Responsive adjustment for small screens */
@media (max-width: 400px) {
    .input-group {
        flex-direction: column;
    }
    input[type="number"] {
        width: 100%;
    }
}
