import renderHeader from './header'

function renderNursery () {
    renderHeader()

    const container = document.getElementById('container')
    container.innerHTML = 'test renderNursery'

}

export default renderNursery