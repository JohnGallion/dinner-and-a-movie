 
 let mealDescription = document.getElementById("mealName");
 let mealCat = document.getElementById("mealCategory");
 let mealImage = document.getElementById("mealImg");
 let mealRecipe = document.getElementById("mealLink");
 
 
async function randomMeal() {
    try{
   const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
   const data =  await response.json()

   document.getElementById("card-container").style.visibility = "visible";
   document.getElementById("mealz").style.height = "100%";
   document.getElementById("mealImg").style.marginTop = "6em";



   let mealInfo = {
    mealName: data.meals[0].strMeal,
    mealCategory: data.meals[0].strCategory,
    mealImage: data.meals[0].strMealThumb,
    mealInstructions: data.meals[0].strYoutube,
    }
    
    console.log(mealInfo)

    
     mealImage.innerHTML = `<img src=${mealInfo.mealImage}>`
     mealDescription.innerHTML = `${mealInfo.mealName}`
     mealCat.innerHTML = `Category:  ${mealInfo.mealCategory}`
     mealRecipe.innerHTML= `<a href=${mealInfo.mealInstructions} target="_blank">Recipe</a>`

     
     
    
  }
catch (error) {
console.log(error)
}
}







const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8942028294msh261be75419f76e2p171bf3jsn134222a754ec',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};




function randomMovie() {

  let movieImg = document.getElementById("movieImage");
 let title = document.getElementById("title");
 let rating = document.getElementById("rank");
 let releaseYear = document.getElementById("year");
 let trailer = document.getElementById("trailer");

  let number = Math.floor(Math.random() * 100)

  fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${number}`, options)
	.then(response => response.json())

	.then(data => {

    movieInfo = {
      title: data.title,
      rank: data.rank,
      year: data.year,
      poster: data.image,
      trailer: data.trailer,
    }
    
    console.log(movieInfo)

    movieImg.innerHTML = `<img  id ="poster" src=${movieInfo.poster}>`;
    title.innerHTML = `${movieInfo.title}`;
    rating.innerHTML = `IMBD Rank: ${movieInfo.rank}`;
    releaseYear.innerHTML = `Realeased: ${movieInfo.year}`
    trailer.innerHTML = `<a href=${movieInfo.trailer} target="_blank">Trailer</a>`

  })

	.catch(err => console.error(err));
}

