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
                            'You can call or visit us during business hours or email at any time. ' + 
                            'We look forward to hearing from you.'
    contactHeaderContainer.appendChild(contactCopy)

    const contactMethodsContainer = document.createElement('div')
    contactMethodsContainer.classList.add('methods-container')
    content.appendChild(contactMethodsContainer)

    const phoneContact = document.createElement('div')
    phoneContact.classList.add('contact-method')
    phoneContact.innerHTML = `<img src="assets/phone-call.png" class="contact-icon" alt="Phone icon"> <br> <br>`
    phoneContact.innerHTML += `Call us: <br>(+47) 867 53 090`
    contactMethodsContainer.appendChild(phoneContact)

    const emailContact = document.createElement('div')
    emailContact.classList.add('contact-method')
    emailContact.innerHTML = `<img src="assets/envelope.png" class="contact-icon" alt="Mail icon"> <br> <br>`
    emailContact.innerHTML += 'Email us: <br> KinderGarden@example.com'
    contactMethodsContainer.appendChild(emailContact)
    
    const visitContact = document.createElement('div')
    visitContact.classList.add('contact-method')
    visitContact.innerHTML = `<img src="assets/shop.png" class="contact-icon" alt="Shop icon"> <br> <br>`
    visitContact.innerHTML += `Visit us:<br> 
                               Kuleb??nnerveien 101<br>
                               7770 Flatanger, Norge`
    contactMethodsContainer.appendChild(visitContact)

    const iconAttrContainer = document.createElement('div')
    iconAttrContainer.classList.add('icon-attributes')
    iconAttrContainer.innerHTML = `<div>Contact icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                   <div>Plant icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`
    content.appendChild(iconAttrContainer)
}

export default renderContact