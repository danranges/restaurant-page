import renderHeader from './header'

function renderAbout() {
    renderHeader()

    const content = document.getElementById('content')

    const aboutCopy = document.createElement('div')
    aboutCopy.innerHTML = "Lorem ipsum whatever"
    aboutCopy.classList.add('text-copy')
    content.appendChild(aboutCopy)

    const heroImg  = document.createElement('div')
    heroImg.innerHTML = "test"
    heroImg.classList.add('about-hero')
    content.appendChild(heroImg)
    

}

export default renderAbout