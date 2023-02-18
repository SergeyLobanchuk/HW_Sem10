const dataInfo = JSON.parse(data);

const content = document.querySelector('.content');

dataInfo.forEach(element => {
    const contentEl = document.createElement('div');
    const setupEl = document.createElement('setup');
    const punchlineEl = document.createElement('h2');
    const imgEl = document.createElement('img');

    imgEl.src = element.image;
    setupEl.textContent = element.setup;
    punchlineEl.textContent = element.punchline;

    content.appendChild(contentEl);
    contentEl.appendChild(setupEl);
    contentEl.appendChild(punchlineEl);
    contentEl.appendChild(imgEl);



});
console.log(dataInfo);

