document.addEventListener("DOMContentLoaded", () => {
  fetch('../components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    })
    .catch(err => console.error("Failed to load navbar:", err));
});