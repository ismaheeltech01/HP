const header = document.querySelector('.header')

function addheaderHeight() {
    let headerHeight = window.pageXOffset;

    if(headerHeight > 200) {
        header.classList.add('.add')
    }
}

window.addEventListener('scroll', () => {
    return addheaderHeight()
});


