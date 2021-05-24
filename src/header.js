import renderAbout from './about'
import renderNursery from './nursery'
import renderContact from './contact'

function renderHeader() {
    
    const content = document.getElementById('content')
    content.innerHTML = ''
    
    const header = document.createElement('div')
    header.classList.add('header')
    content.appendChild(header)

    const title = document.createElement('h1')
    title.classList.add('title-text')
    title.innerHTML = 'KinderGarden'
    header.appendChild(title)

    const hamburger = document.createElement('div')
    hamburger.classList.add('hamburger')
    hamburger.innerHTML = `<div class="bar1"></div>
                           <div class="bar2"></div>
                           <div class="bar3"></div>`
    header.appendChild(hamburger)

    const largeNav = document.createElement('div')
    largeNav.classList.add('large-nav')
    header.appendChild(largeNav)

    const mobileNav = document.createElement('div')
    mobileNav.classList.add('mobile-nav')
    content.appendChild(mobileNav)

    const about = document.createElement('div')
    about.classList.add('nav')
    about.innerHTML = "About"
    
    const nursery = document.createElement('div')
    nursery.classList.add('nav')
    nursery.innerHTML = 'Nursery'
    
    const contact = document.createElement('div')
    contact.classList.add('nav')
    contact.innerHTML = 'Contact'

    const container = document.createElement('div')
    container.classList.add('container')
    container.id = 'container'
    content.appendChild(container)

    function widthCheck() {
        if (document.body.clientWidth <= 600) {
            mobileNav.appendChild(about)
            mobileNav.appendChild(nursery)
            mobileNav.appendChild(contact)
        } else {
            largeNav.appendChild(about)
            largeNav.appendChild(nursery)
            largeNav.appendChild(contact)
        }
    }
    
    function mobileNavVisibility() {
        hamburger.classList.toggle('change')
        if (mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none'
        } else {
            mobileNav.style.display = 'block'
        }
    }

    widthCheck()

    hamburger.addEventListener('click', mobileNavVisibility)
    window.addEventListener('resize', widthCheck)
    title.addEventListener('click', renderAbout)
    about.addEventListener('click', renderAbout)
    nursery.addEventListener('click', renderNursery)
    contact.addEventListener('click', renderContact)
    
}

export default renderHeader