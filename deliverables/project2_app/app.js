const cards = [
  {title: 'Adaptive UI', detail: 'Layout shifts based on accessibility preferences.'},
  {title: 'Transparent AI', detail: 'Model decisions include citations and confidence.'},
  {title: 'Feedback Loop', detail: 'Users can rate and revise AI outputs.'}
];
const grid = document.getElementById('cards');
cards.forEach(card => {
  const el = document.createElement('div');
  el.className = 'card';
  el.innerHTML = `<h3>${card.title}</h3><p>${card.detail}</p>`;
  grid.appendChild(el);
});
const apiSample = document.getElementById('apiSample');
apiSample.textContent = `fetch('http://localhost:5000/predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ sample: 'data' })
}).then(res => res.json())
  .then(data => console.log(data));`;
