$.getJSON(API_BASE_URL+'/discover/movie',api_options)
.then((data)=>{
    const {results} = data
    results.forEach((movie)=>{
        /* console.log(movie) */
        const html = `
        <div style="float:left;color:whitesmoke;margin:10px; border: 2px solid black; width:350px; background: linear-gradient(147deg, #000000 0%, #04619f 95%);">
        <img src="${IMAGE_URL + movie.poster_path}" style="margin:4px;">
        <h4 style="margin:4px;">${movie.title}</h4>
        <p style="margin:4px;">Release Date: ${movie.release_date}</p>
        <form method="get" action="/movies/${movie.id}">
        <button style="height:40px; width:200px; background-color: darkblue; background-image: linear-gradient(darkblue,blue); border:2px solid yellow; color:whitesmoke;margin:4px; border-radius: 5px;">View Details</button>
        </form>
        
        </div>
        `
        $('.movies').append(html)
        $('.movies').css("margin-left","50px")
    })
})
.catch((err)=>{
    console.log(err)
})