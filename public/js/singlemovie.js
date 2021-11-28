$.getJSON(API_BASE_URL+`/movie/${movie_id}`,api_options)
.then((movie)=>{
    console.log(movie)
    movie.genres.forEach((genre)=>{
        const moviegenre = `<p>${genre.name}</p>`
        $('#genres').append(moviegenre)
    })
    $('#title').text(movie.title)
    $('#tagline').text(movie.tagline)
    $('#runtime').text(movie.runtime)
    $('#release_date').text(movie.release_date)
    $('#overview').append(movie.overview)
    $('#movieimg').attr({
        src: IMAGE_URL + movie.poster_path
    })
    

})
.catch((err)=>{
    console.log(err)
})
