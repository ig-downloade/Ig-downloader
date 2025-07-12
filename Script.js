// Tabs switch
const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Paste button functionality
document.querySelector('.paste-btn').addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    document.querySelector('input').value = text;
  } catch (err) {
    alert('Clipboard access denied');
  }
});
