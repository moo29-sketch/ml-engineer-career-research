// Only local presentation behavior; no analytics or external requests.
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.site-nav');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
const clock = document.getElementById('clock');
function updateClock(){if(clock)clock.textContent = new Date().toISOString().slice(11,19) + ' UTC';}
updateClock();
setInterval(updateClock,1000);
