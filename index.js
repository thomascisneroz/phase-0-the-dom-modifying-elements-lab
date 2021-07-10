// Write your code here!
document.getElementById('main').remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
victory.innerHTML = 'TOM is the champion'