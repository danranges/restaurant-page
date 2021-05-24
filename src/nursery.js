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

    createPlantTile('/src/assets/alocasia.png', 'Alocasia Triangularis', 280)
    createPlantTile('/src/assets/aloe-vera.png', 'Aloe Vera', 220)
    createPlantTile('/src/assets/bird-of-paradise.png', 'Bird of Paradise', 480)
    createPlantTile('/src/assets/fiddle-leaf-fig.png', 'Fiddle Leaf Fig', 390)
    createPlantTile('/src/assets/monstera.png', 'Monstera Deliciosa', 420)
    createPlantTile('/src/assets/opuntia.png', 'Prickly Pear Cactus', 200)
    createPlantTile('/src/assets/peace-lily.png', 'Peace Lily', 210)
    createPlantTile('/src/assets/pilea.png', 'Pilea Peperomioides', 185)
    createPlantTile('/src/assets/sempervivum.png', 'Sempervivium "Blue Time"', 145)
    createPlantTile('/src/assets/spider-plant.png', 'Spider Plant', 170)
    createPlantTile('/src/assets/snake-plant.png', 'Sansevieria Trifasciata', 310)
    createPlantTile('/src/assets/zeylonia.png', 'Sansevieria Zeylanica', 325)

}

export default renderNursery