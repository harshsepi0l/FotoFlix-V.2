countElement = document.getElementsByClassName('count')[0];

updateCounter()

function updateCounter() {
    fetch('https://api.countapi.xyz/update/id/?amount=1')
        .then(res => res.json())
    .then(data => countElement.innerHTML = data.value)
}