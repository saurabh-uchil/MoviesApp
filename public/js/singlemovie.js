$.getJSON(API_BASE_URL+`/movie/${movie_id}`,api_options)
.then((movie)=>{
    console.log(movie)
    movie.genres.forEach((genre)=>{
        /* console.log(genre.name) */
        const moviegenre = `<p>${genre.name}</p>`
        $('#genre').append(moviegenre)
    })
    $('#title').text(movie.title)
    $('#overview').append(movie.overview)
    $('#movieimg').attr({
        src: IMAGE_URL + movie.poster_path
    })
    

})
.catch((err)=>{
    console.log(err)
})
