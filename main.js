const root = document.getElementById('root');
console.log('hi');

function githubCardToHtml(sarah) {
  return `<span class="Card">
    <h1>Sarah Lodico Wines</h1>
    <div class="basics">
      <h2>The Basics</h2>
      <div class="field">Name:</div>
      <div class="value">${sarah.name}</div>
      <div class="field">GitHub URL:</div>
      <div class="field">Company:</div>
      <div class="field">LinkedIn:</div>
    </div>
    <div class="story">
      <h2>The Story</h2>
      <div class="bio"></div>
    </div>
  </span>;`;
}

fetch('https://api.github.com/users/sarah-wines')
  .then((response) => response.json())
  .then((user) => {
    document.querySelector('#root').innerHTML = githubCardToHtml(user);
  });
// const name = document.createElement('div');
// name.innerText = item.name;
// root.appendChild(name);

//   const desc = document.createElement('div');
//   company.innerText = item.company;
//   root.appendChild(company);
