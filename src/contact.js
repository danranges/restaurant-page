import renderHeader from './header'

function renderContact () {
    renderHeader()

    const container = document.getElementById('container')
    container.innerHTML = 'test contact'

}

export default renderContact