import { displayImage } from "./randomImage";
/*
async () => {
    const url = "https://dog.ceo/api/breeds/list/all";

    async function retrieve(url){
        try{
            const response = await fetch(url);
            if (!response.ok){
                throw new Error("response status is not ok");
            }
            const requestedData = await response.json();
            return requestedData;
        }
        catch(error){
            console.log(error); 
        }
    }
    
    let responseData = await retrieve(url);
    console.log(responseData);
    let breedData = responseData.message;
    let breeds = Object.keys(breedData);
    let results = [];
    breeds.forEach((breed) =>{
        if (breedData[breed]){
            results.push(`${breed} ${breedData[breed]}`)
        }
        results.push(`${breed}`)
    });
    results.forEach((result) =>{
        let newElement = document.createElement("div");
        newElement.textContent = result;
        document.body.appendChild(newElement);
    })
    // Create a new result array
    // iterate over breeds array to get each key - key = breeds[i]
    // check if sub-breeds exist using the key breedData[key]
    // append each breed and sub-breed (if any) to the result array
    // iterate over result array and create and append a new html element for each breed + subbreed

})();
*/
//const imageUrl = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`;
const breedUrl = "https://dog.ceo/api/breeds/list/all";

async function displayResults(breedObject) {
    let results = [];
    // key = breed, value = subBreed
    for (const [key, value] of Object.entries(breedObject)) {
        results.push(key)
        value.forEach(subBreed => results.push(`${key} ${subBreed}`))
    }

    console.log("results", results)

    results.map((result) => {
        const [breed, subBreed] = result.split(` `);
        let imageUrl = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`;
        if (!subBreed){
            imageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
        }
        displayImage(imageUrl);
        console.log("result", result);
        let newElement = document.createElement("div");
        newElement.textContent = result;
        document.body.appendChild(newElement); 
    })
}

const api = async (url) => {
    
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("response status is not ok");
        }
        const requestedData = await response.json();
        let breedObject = requestedData.message;
        return displayResults(breedObject)
    }
    catch(error){
        console.log(error); 
    }
}
api(breedUrl);