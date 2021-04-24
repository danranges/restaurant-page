function renderHeader() {
    const content = document.getElementById('content')
    
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


    hamburger.addEventListener('click', () => hamburger.classList.toggle('change'))
}

export default renderHeader