const body = document.querySelector('body');
const cardWrapper = body.querySelector('.card-wrapper');
const card = body.querySelector('.card');

body.style.backgroundColor = "#ddd";
body.style.margin = "0";
body.style.height = "100vh";

cardWrapper.style.display = 'flex';
cardWrapper.style.justifyContent = 'center';
cardWrapper.style.alignItems = 'center';
cardWrapper.style.height= '100%';

card.style.backgroundColor = 'green';
card.style.color = 'white';
card.style.width = '500px';
card.style.padding = '20px';
card.style.borderRadius = '8px';
card.style.textAlign = 'center';