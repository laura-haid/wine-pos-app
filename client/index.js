fetch("http://localhost:5000/image")
.then(async (resp)=>{
    const respBody= await resp.json()
    console.log(respBody)
    const imageURL=respBody.homeUrl
    document.getElementById("homeimage").src = imageURL
})
.catch((error) => console.error(error))
fetch("http://localhost:5000/wines")
.then(async (resp)=>{
    const respBody= await resp.json()
    console.log(respBody)
    const wines = respBody.wines


    document.getElementById("wine1name").innerHTML = wines[0].name
    document.getElementById("wine1price").innerHTML = wines[0].price
    
    document.getElementById("wine2name").innerHTML = wines[1].name
    document.getElementById("wine2price").innerHTML = wines[1].price
})
.catch((error) => console.error(error))

