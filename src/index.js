//const { locationInfo } = require("jsdom/lib/jsdom/living/helpers/internal-constants")

//console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((data) => renderImg(data.message))
    //.then((data) => console.log(data))

fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
        renderBreeds(Object.keys(data.message))
        filterBreeds(Object.keys(data.message))
    })
        
function renderImg(urlArr) {
    const divForImgs = document.querySelector('#dog-image-container')

    urlArr.forEach((url) => {
        const img = document.createElement('img')
        
        img.src = url

        divForImgs.append(img)
    })
} 

function renderBreeds(breedArr) {

    const ulForBreeds = document.querySelector('#dog-breeds')

    breedArr.forEach((breed) => {
    
    const li = document.createElement('li')

   

    li.textContent = breed 

    li.addEventListener(`click`, (e) => {
        e.target.style.color = 'red'
    })

    ulForBreeds.appendChild(li)

    })
}
        
 function filterBreeds(breedArr) {
    const dropdown = document.querySelector('#breed-dropdown')

    dropdown.addEventListener('change', (e) => handleChange(e))


    function handleChange(e) {
        const filteredBreeds = breedArr.filter((breed) => {
            return breed[0] == e.target.value
            return breed.startWith(e.target.value)
            if (breed[0] == e.target.value) 
            {
            return true 
            }
            else {
                return false
        }
    })
    const ul = document.querySelector('#dog-breeds')
    ul.textContent = ""
    }
}