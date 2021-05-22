import renderHeader from './header'

function renderAbout() {
    renderHeader()

    const container = document.getElementById('container')

    const aboutCopy = document.createElement('div')
    aboutCopy.innerText = `No matter if it's a giant set of elephant ears or a tiny polka dot plant, few things breathe life into a room like a houseplant. 
                           
                           When your heart yearns for a bit more green, stop by one of our Classrooms or visit our virtual Nursery School, where you can find everything from alocasias to ZZ plants, birds of paradise to whale fins.`
    aboutCopy.classList.add('text-copy')
    container.appendChild(aboutCopy)

    const heroImg  = document.createElement('div')
    heroImg.classList.add('about-hero')
    container.appendChild(heroImg)
    

}

export default renderAbout