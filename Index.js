const openEL = document.getElementById('open-menu')
const closeEl = document.getElementById('close-menu')
const sideEL = document.querySelector('.side-bar')
sideEL.style.display = 'none'; // Initially hide the sidebar

openEL.addEventListener("click", () => {
  openEL.style.display = 'none';
  sideEL.style.display = 'flex';
  sideEL.classList.remove('slide-out');
  sideEL.classList.add('slide-in');
});

closeEl.addEventListener("click", () => {
  sideEL.classList.remove('slide-in');
  sideEL.classList.add('slide-out');
  setTimeout(() => {
    sideEL.style.display = 'none';
    openEL.style.display = 'flex';
  }, 500); // Match your animation duration
});