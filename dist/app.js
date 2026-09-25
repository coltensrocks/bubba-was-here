const details = {
  home: ['Forever 22', 'A journey remembered through the people, places, and little moments that keep Colten close.'],
  meet: ['Meet Colten', 'Colten Michael Harrsch — a bright soul whose story continues through every mile, every memory, and every rock shared along the way.'],
  story: ['The Story', 'Different places. Same beautiful soul. His journey continues through the love people carry forward.'],
  map: ["Bubba's Map", '127+ rocks have traveled through 18 U.S. states and 6 countries. Every pin is a reminder that a small act of kindness can travel far.'],
  find: ['Find a Rock', 'Find a Bubba rock, take it somewhere meaningful, take a picture, share the journey, then leave it for someone else to discover.'],
  share: ['Share a Journey', 'Add your photo and location to help the journey keep moving — one rock, one person, one place at a time.'],
  gallery: ['Gallery', 'A growing collection of the miles, places, and kind people who have carried Bubba forward.']
};

const dialog = document.querySelector('#journey-dialog');
const title = document.querySelector('#dialog-title');
const copy = document.querySelector('#dialog-copy');
const close = document.querySelector('.dialog-close');

function showTopic(topic) {
  const content = details[topic];
  if (!content) return;

  const [heading, text] = content;
  title.textContent = heading;
  copy.textContent = text;
  if (!dialog.open) dialog.showModal();
}

function topicFromHash() {
  return window.location.hash.slice(1);
}

document.querySelectorAll('[data-topic]').forEach((button) => {
  button.addEventListener('click', () => {
    const topic = button.dataset.topic;
    if (topicFromHash() === topic) showTopic(topic);
    else window.location.hash = topic;
  });
});

window.addEventListener('hashchange', () => {
  const topic = topicFromHash();
  if (details[topic]) showTopic(topic);
  else if (dialog.open) dialog.close();
});

close.addEventListener('click', () => {
  history.replaceState(null, '', window.location.pathname + window.location.search);
  dialog.close();
});
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) close.click();
});

if (details[topicFromHash()]) showTopic(topicFromHash());
