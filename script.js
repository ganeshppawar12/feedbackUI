const feedbackOptions = document.querySelectorAll('.feedback-option');
const sendFeedbackButton = document.getElementById('send-feedback');
const confirmation = document.getElementById('confirmation');
const selectedFeedback = document.getElementById('selected-feedback');
const newFeedbackButton = document.getElementById('new-feedback');

let selectedOption = '';

feedbackOptions.forEach(option => {
    option.addEventListener('click', () => {
        feedbackOptions.forEach(opt => opt.classList.remove('selected'));
        
        option.classList.add('selected');
        selectedOption = option.textContent;

        sendFeedbackButton.disabled = false;
    });
});

sendFeedbackButton.addEventListener('click', () => {
    if (selectedOption) {
        selectedFeedback.textContent = `Feedback: ${selectedOption}`;
        confirmation.classList.add('visible');
        feedbackOptions.forEach(option => option.style.display = 'none');
        sendFeedbackButton.style.display = 'none';
    }
});

newFeedbackButton.addEventListener('click', () => {
    
    confirmation.classList.remove('visible');
    feedbackOptions.forEach(option => {
        option.style.display = 'block';
        option.classList.remove('selected');
    });
    sendFeedbackButton.style.display = 'block';
    sendFeedbackButton.disabled = true;
    selectedOption = '';
});
