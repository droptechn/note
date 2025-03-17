// Array of shayaries
const shayaries = [
    "Dil ki baat labon tak na aane paayi, Ek arsa guzar gaya muskurate hue.",
    "Zindagi mein kuch pal hote hain jo yaadgar ho jaate hain, Woh pal humesha dil mein rehte hain.",
    "Mohabbat ek aisi dastaan hai, Jo har dil ko behlaati hai.",
    "Dil ki gehraaiyon se nikli hai yeh duaa, Tum muskurao toh phool khil jaaye.",
    "Zindagi ek safar hai suhana, Yahan har mod par naye rang hain.",
    "Dil ki baat labon tak na aane paayi, Ek arsa guzar gaya muskurate hue.",
    "Zindagi mein kuch pal hote hain jo yaadgar ho jaate hain, Woh pal humesha dil mein rehte hain.",
    "Mohabbat ek aisi dastaan hai, Jo har dil ko behlaati hai.",
    "Dil ki gehraaiyon se nikli hai yeh duaa, Tum muskurao toh phool khil jaaye.",
    "Zindagi ek safar hai suhana, Yahan har mod par naye rang hain.",
    // Add more shayaries as needed...
  ];
  
  // Generate buttons dynamically
  const buttonGrid = document.getElementById('buttonGrid');
  const startId = 24701;
  const totalButtons = 80;
  
  for (let i = 0; i < totalButtons; i++) {
    const buttonId = startId + i;
    const button = document.createElement('button');
    button.id = buttonId;
    button.textContent = `Button ${buttonId}`;
  
    // Add a link to a new page for each button
    button.addEventListener('click', () => {
      const shayari = shayaries[i % shayaries.length]; // Cycle through shayaries
      window.location.href = `button-template.html?id=${buttonId}&shayari=${encodeURIComponent(shayari)}`;
    });
  
    buttonGrid.appendChild(button);
  }
  // script.js (for index.html)
button.addEventListener('click', () => {
    const shayari = shayaries[i % shayaries.length];
    window.location.href = `view-template.html?id=${buttonId}&shayari=${encodeURIComponent(shayari)}`;
  });