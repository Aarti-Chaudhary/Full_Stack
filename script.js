document.getElementById("dietForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const dietPref = document.getElementById("dietPref").value;
  const location = document.getElementById("location").value;

  // Simple fake logic (you'll connect this to backend/AI later)
  const resultText = `
    <h3>Your Personalized Diet Plan</h3>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Height:</strong> ${height} cm</p>
    <p><strong>Weight:</strong> ${weight} kg</p>
    <p><strong>Diet Preference:</strong> ${dietPref}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Basic Suggestion:</strong> Eat fresh, local food 3 times a day with proper hydration. More AI-based plan coming soon!</p>
  `;

  document.getElementById("result").innerHTML = resultText;
});
