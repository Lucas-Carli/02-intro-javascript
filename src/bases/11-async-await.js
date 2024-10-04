// Async - Await

// const getImagenPromesa = () => new Promise( resolve => resolve ('https://ajscsnacmsam.com'))
// getImagenPromesa().then(console.log);

const getImagen = async () => {

    try {
        const apiKey = 'oDspegxnZSjDJRcxWcGCGmD1XBHj46m6';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        // console.log(data);
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)
    } catch (error) {
        console.error(error)
    }
}

getImagen();

