
// const getImagenPromesa = () => {
//     return  new Promise ( resolve => resolve('http://api.giphy.com/v1/gifs/random?api_key=KoLyEesvRNNp0MTKWYeHZPzI1Wap2JMz'))
// }

const getImagen = async() => {
    try{
    const apiKey = 'KoLyEesvRNNp0MTKWYeHZPzI1Wap2JMz';
    const resp = await  fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } =  await resp.json();
    const {url} = data.images.original;    
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    } catch (error){
        console.error(error)
    } 
}

getImagen()


// peticion.then( resp => resp.json() )
// .then(({ data }) => {
//     const {url} = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img)
// })

// .catch( console.warn)