/*
Name: Aaryan Desai
filename: Javascript file 
Date: 5-April-2024
Assignment-4 Part-2 Image Gallery
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declare array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declare object listing alternative text for each image
const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'A beautiful sunset',
  'pic3.jpg': 'A cute puppy',
  'pic4.jpg': 'Scenic mountain view',
  'pic5.jpg': 'Colorful flowers'
};

// Loop through the array of filenames and insert images into thumb-bar
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src',filename);
  newImage.setAttribute('alt', altTexts[filename]);
  thumbBar.appendChild(newImage);
});

// Add click event listener to each thumb-bar image
thumbBar.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', function() {
    displayedImage.setAttribute('src', this.getAttribute('src'));
    displayedImage.setAttribute('alt', this.getAttribute('alt'));
  });
});

// Add click event listener to darken/lighten button
btn.addEventListener('click', function() {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
