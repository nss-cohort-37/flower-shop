import { useFlowers } from "./FlowerDataProvider.js"
import SingleFlowerComponent from "./FlowerComponent.js"

const importedFlowerArray = useFlowers()
const garden = document.querySelector(".flowerGarden")

const FlowerListComponent = () => {
    for (const singleFlower of importedFlowerArray) {
        garden.innerHTML += SingleFlowerComponent(singleFlower)
    }
}

export default FlowerListComponent
