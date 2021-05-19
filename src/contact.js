import renderHeader from './header'

function renderContact () {
    renderHeader()

    const content = document.getElementById('content')

    const container = document.getElementById('container')
    container.innerHTML = ''

    const contactHeaderContainer = document.createElement('div')
    contactHeaderContainer.classList.add('contact-header-container')
    content.appendChild(contactHeaderContainer)
    
    const contactHeader = document.createElement('div')
    contactHeader.classList.add('contact-header')
    contactHeader.innerText = 'Contact Us'
    contactHeaderContainer.appendChild(contactHeader)

    const contactCopy = document.createElement('div')
    contactCopy.classList.add('contact-copy')
    contactCopy.innerText = 'Should you have questions about plant care, choice, or ordering, we are here to help. ' +
                            'You can call us during business hours or email at any time. We look forward to hearing from you.'
    contactHeaderContainer.appendChild(contactCopy)

    const contactMethodsContainer = document.createElement('div')
    contactMethodsContainer.classList.add('methods-container')
    content.appendChild(contactMethodsContainer)

}

export default renderContact