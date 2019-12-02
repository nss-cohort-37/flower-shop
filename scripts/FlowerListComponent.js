import { useFlowers } from "./FlowerDataProvider.js"
import SingleFlowerComponent from "./FlowerComponent.js"

const importedFlowerArray = useFlowers()
const garden = document.querySelector(".flowerGarden")

const FlowerListComponent = () => {
    for (const singleFlower of importedFlowerArray) {
        garden.innerHTML += SingleFlowerComponent(singleFlower)
    }

    // garden.innerHTML += `
    //     ${
    //     importedFlowerArray.map(
    //         (currentFlower) => {
    //             return SingleFlowerComponent(currentFlower)
    //         }
    //     ).join(" 🌸🌺🌼 ")
    //     }
    // `
}

export default FlowerListComponent
