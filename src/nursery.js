import renderHeader from './header'

function renderNursery () {
    renderHeader()

    const content = document.getElementById('content')

    const container = document.getElementById('container')
    container.innerHTML = ''

    const nurseryContainer = document.createElement('div')
    nurseryContainer.classList.add('nursery-container')
    content.appendChild(nurseryContainer)


    function createPlantTile(asset='', name, price) {
        const tile = document.createElement('div')
        tile.classList.add('nursery-tile')

        const plantAsset = document.createElement('div')
        plantAsset.innerHTML = `<img class="tile-asset" src=${asset}>`
        tile.appendChild(plantAsset)

        const plantName = document.createElement('div')
        plantName.classList.add('tile-name')
        plantName.innerHTML = `${name}`
        tile.appendChild(plantName)

        const plantPrice = document.createElement('div')
        plantPrice.classList.add('plant-price')
        plantPrice.innerHTML = `${price},-`
        tile.appendChild(plantPrice)

        nurseryContainer.appendChild(tile)
    }

    createPlantTile('/dist/assets/alocasia.png', 'Alocasia Triangularis', 280)
    createPlantTile('/dist/assets/aloe-vera.png', 'Aloe Vera', 220)
    createPlantTile('/dist/assets/bird-of-paradise.png', 'Bird of Paradise', 480)
    createPlantTile('/dist/assets/fiddle-leaf-fig.png', 'Fiddle Leaf Fig', 390)
    createPlantTile('/dist/assets/monstera.png', 'Monstera Deliciosa', 420)
    createPlantTile('/dist/assets/opuntia.png', 'Prickly Pear Cactus', 200)
    createPlantTile('/dist/assets/peace-lily.png', 'Peace Lily', 210)
    createPlantTile('/dist/assets/pilea.png', 'Pilea Peperomioides', 185)
    createPlantTile('/dist/assets/sempervivum.png', 'Sempervivium "Blue Time"', 145)
    createPlantTile('/dist/assets/spider-plant.png', 'Spider Plant', 170)
    createPlantTile('/dist/assets/snake-plant.png', 'Sansevieria Trifasciata', 310)
    createPlantTile('/dist/assets/zeylonia.png', 'Sansevieria Zeylanica', 325)

}

export default renderNursery