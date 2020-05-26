const toggleButton = document.getElementsByClassName('toggle-button')[0]
const anchorLinks = document.getElementsByClassName('anchors')[0]

toggleButton.addEventListener('click', () => {
    anchorLinks.classList.toggle('active')
})