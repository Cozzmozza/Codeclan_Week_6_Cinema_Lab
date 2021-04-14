const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getAllFilmTitles = function(){
  const filmTitles = this.films.map((film) => {
    return film.title;
  })
  return filmTitles;
}

Cinema.prototype.findFilmByTitle = function(title){
  const filmFound = this.films.find(film => {
    return film.title === title;
  })
  return filmFound;
}

Cinema.prototype.filterFilmsByGenre = function(genre){
  const foundFilms = this.films.filter((film) => film.genre === genre);
  return foundFilms;
}

Cinema.prototype.checkByYear = function(year) {
  let boolYear = false
  this.films.forEach((film) => {
    if (film.year === year){
      boolYear = true 
    }
  })
  return boolYear
}

Cinema.prototype.lengthCheck = function(length){
  // return this.films.filter(film => film.length > length);
  let boolLength = false
  this.films.forEach((film) => {
    if (film.length > length){
      boolLength = true 
    }
  })
  return boolLength
}

Cinema.prototype.getTotalRunningTime = function() {
  return this.films.reduce((accum, curr) => {
    return accum + curr.length
  }, 0)
}

Cinema.prototype.filterByYear = function(year) {
  return this.films.filter(film => film.year === year);
}


Cinema.prototype.filmsByProperty = function(name, value) {


  const methods = {
    year: this.filterByYear(value),
    genre: this.filterFilmsByGenre(value),
  }
  
  return methods[name]

}

module.exports = Cinema;
