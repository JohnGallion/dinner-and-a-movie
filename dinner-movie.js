 let mealThumbnail = document.createElement('img');
 let mealDescription = document.getElementsByClassName("card-title")
 let recipeLink = document.getElementsByClassName("recipe-link")

async function randomMeal() {
    try{
   const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
   const data =  await response.json()

   let mealInfo = {
    mealName: data.meals[0].strMeal,
    mealCategory: data.meals[0].strCategory,
    mealImage: data.meals[0].strMealThumb,
    mealInstructions: data.meals[0].strYoutube,
    }
    
    console.log(mealInfo)
     mealThumbnail.src = `${mealInfo.mealImage}`
     document.getElementsByClassName('card-img-top').appendChild(mealThumbnail)
     mealDescription.innerHTML = `Meal Name: ${mealInfo.mealName}`
    
}
catch (error) {
console.log("There was an error fetching meal info")
}
}







const url = 'https://online-movie-database.p.rapidapi.com/aut';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8942028294msh261be75419f76e2p171bf3jsn134222a754ec',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

async function randomMovie() {
    try {
        const response = await fetch(url, options)
	const data = response.json()

  console.log(data)
    }
	
	catch (error) {
    console.log('there was an error fetching movie info') 
      
    }
  }