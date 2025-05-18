const form = document.getElementById('predictForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const mood = document.getElementById('mood').value;
  const sleep = parseInt(document.getElementById('sleep').value);
  const stress = parseInt(document.getElementById('stress').value);

  // Simple logic for demonstration
  let risk = "Low";
  if (stress >= 8 || sleep < 4 || mood === "sad" || mood === "anxious") {
    risk = "High";
  } else if (stress >= 5 || sleep < 6) {
    risk = "Moderate";
  }

  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h3>Prediction Result:</h3>
    <p><strong>Risk Level:</strong> ${risk}</p>
    <p>Note: This is a mock result. If you're feeling unwell, please seek professional help.</p>
  `;
});
