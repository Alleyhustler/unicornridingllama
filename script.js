const img = document.getElementById("weirdImage");

document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Calculate angle and distortion
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    
    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

    // Rotate image based on mouse position
    img.style.transform = `rotate(${angle}deg) scale(${1 + distance / maxDistance})`;

    // Add color shift (hue rotation)
    const hueShift = (distance / maxDistance) * 360;
    img.style.filter = `hue-rotate(${hueShift}deg)`;

    // Change border-radius for weird morphing effect
    const morphValue = 50 + (distance / maxDistance) * 50;
    img.style.borderRadius = `${morphValue}%`;
});
