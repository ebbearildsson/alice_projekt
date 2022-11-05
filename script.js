document.addEventListener('click', function handleClick(event) {
    if (event.target.classList.contains('window')) event.target.classList.add('off');
    var windows = Array.from(document.getElementsByClassName('window'))
    if (windows.every(e => e.classList.contains('off'))) document.getElementById('sleigh').classList.add('move')
});
  