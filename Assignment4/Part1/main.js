// Retrieve Elements
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Define Variables
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Define Functions
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function generateStory() {
  let newStory = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

  let name = 'Bob'; // default name

  if(customName.value !== '') {
    name = customName.value;
  }

  let weight = 300; // default weight
  let temperature = 94; // default temperature

  if(document.getElementById("uk").checked) {
    weight = Math.round(300 * 0.0714286); // converting pounds to stones (1 pound = 0.0714286 stone)
    temperature = Math.round((94 - 32) * (5 / 9)); // converting Fahrenheit to Celsius
  }

  newStory = newStory.replace(/:insertx:/g, randomValueFromArray(insertX));
  newStory = newStory.replace(':inserty:', randomValueFromArray(insertY));
  newStory = newStory.replace(':insertz:', randomValueFromArray(insertZ));
  newStory = newStory.replace(/Bob/g, name);
  newStory = newStory.replace('94 fahrenheit', temperature + ' centigrade');
  newStory = newStory.replace('300 pounds', weight + ' stone');

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

// Event Listener
randomize.addEventListener('click', generateStory);
