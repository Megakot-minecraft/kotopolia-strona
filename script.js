
// Przykład: wczytaj JSON z lokalnego pliku (można podpiąć pod GitHub Pages lub API)
fetch('https://yourdomain.github.io/helpop-log.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('messages');
    if (!data.length) {
      container.innerHTML = "<p>Brak zgłoszeń.</p>";
      return;
    }
    data.forEach(entry => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${entry.player}</strong> [${entry.timestamp}]: ${entry.message}`;
      container.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('messages').innerText = "Błąd wczytywania danych.";
    console.error(error);
  });
