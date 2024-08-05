
const imgApi = async (url) => {
    
    try{
        console.log('hello');
        //let imgData = await displayImage(url);
        //console.log(imgData);
        let imageData = url.message;
        let resultImages = [];
        resultImages.push(imageData);
        resultImages.forEach((image) =>{
            let newElement = document.createElement("img");
            newElement.src = imageData;
            console.log(newElement);
            document.body.appendChild(newElement);
        });
    }
    catch(error){
        console.log(error); 
    }
}

export async function displayImage(url){
    try{
        console.log('display image');
        const res = await fetch(url);
        if (!res.ok){
            throw new Error("response status is not ok");
        }
        const resData = await res.json();
        imgApi(resData);
        return resData;
        }
        catch(error){
            console.log(error); 
        }
}
    




