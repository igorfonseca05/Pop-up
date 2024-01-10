const button = document.querySelector("button");
const buttonClose = document.querySelector(".popup-Clouse")
const popUpWrapper = document.querySelector(".popup-wrapper");

button.addEventListener('click', () => {
    popUpWrapper.style.display = 'block';
})

popUpWrapper.addEventListener('click', (event) => {
    const ElementClassList = event.target.classList[0];
    const classNames = ['popup-Clouse','popUp-link','popup-wrapper' ];
    const condition = classNames.some(className => className === ElementClassList)

    console.log(condition)

    if (condition) {
        popUpWrapper.style.display = 'none'
    }
})

const getDataPopUp = () => {
    const deadlineContainer = document.querySelector('.deadlineContainer')
    const data = new Date()

    const deadLine = data.toLocaleDateString('pt-br', {dateStyle: "short"})

    deadlineContainer.innerText = `Aproveite hoje nosso desconto especial de 20% em todos os produtos!
    🛒 Use o código: FLASH20 | Válido até ${deadLine}`
}

getDataPopUp()