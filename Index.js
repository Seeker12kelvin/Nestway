const openEL = document.getElementById('open-menu')
const closeEl = document.getElementById('close-menu')
const sideEL = document.querySelector('.side-bar')
sideEL.style.display = 'none'; // Initially hide the sidebar

openEL.addEventListener("click", () => {
  openEL.style.display = 'none';
  // Add a class to trigger the slide-in animation
  sideEL.className = 'slide-in';
  sideEL.style.display = 'flex';
  sideEL.style.zIndex = '1000'; // Ensure the sidebar is above other content
  sideEL.style.position = 'fixed'; // Fix the sidebar position
  sideEL.style.top = '0'; // Align to the top of the viewport
  sideEL.style.left = '0'; // Align to the left of the viewport
  sideEL.style.height = '100vh'; // Full height of the viewport
  sideEL.style.width = '250px'; // Set a width for the sidebar
  sideEL.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Set a background color
  sideEL.style.backdropFilter = 'blur(10px)'; // Optional: add a blur effect for a frosted glass look
  sideEL.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Optional shadow for better visibility
  sideEL.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition for the slide-in effect
  sideEL.style.transform = 'translateX(0)'; // Ensure the sidebar is in view
  sideEL.style.overflowY = 'auto'; // Allow scrolling if content overflows
  sideEL.style.padding = '20px'; // Add some padding for content
  sideEL.style.display = 'flex'; // Ensure the sidebar is displayed as a flex container
  sideEL.style.flexDirection = 'column'; // Stack items vertically
  sideEL.style.alignItems = 'flex-start'; // Align items to the start
  sideEL.style.justifyContent = 'flex-start'; // Align items to the start
  sideEL.style.gap = '10px'; // Add some space between items
})

closeEl.addEventListener("click", () => {
  sideEL.className = 'slide-out';
  sideEL.style.display = 'none';
  openEL.style.display = 'flex';
  sideEL.style.zIndex = '1000'; // Ensure the sidebar is above other content
  sideEL.style.position = 'fixed'; // Fix the sidebar position
  sideEL.style.top = '0'; // Align to the top of the viewport
  sideEL.style.left = '0'; // Align to the left of the viewport
  sideEL.style.height = '100vh'; // Full height of the viewport
  sideEL.style.width = '250px'; // Set a width for the sidebar
  sideEL.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Set a background color
  sideEL.style.backdropFilter = 'blur(10px)'; // Optional: add a blur effect for a frosted glass look
  sideEL.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Optional shadow for better visibility
  sideEL.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition for the slide-in effect
  sideEL.style.transform = 'translateX(0)'; // Ensure the sidebar is in view
  sideEL.style.overflowY = 'auto'; // Allow scrolling if content overflows
  sideEL.style.padding = '20px'; // Add some padding for content
  sideEL.style.display = 'flex'; // Ensure the sidebar is displayed as a flex container
  sideEL.style.flexDirection = 'column'; // Stack items vertically
  sideEL.style.alignItems = 'flex-start'; // Align items to the start
  sideEL.style.justifyContent = 'flex-start'; // Align items to the start
  sideEL.style.gap = '10px'; // Add some space between items
})