 
 let mealDescription = document.getElementById("mealName");
 let mealCat = document.getElementById("mealCategory");
 let mealImage = document.getElementById("mealImg");
 let mealRecipe = document.getElementById("mealLink");
 
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

    
     mealImage.innerHTML = `<img src=${mealInfo.mealImage}>`
     mealDescription.innerHTML = `Meal Name: ${mealInfo.mealName}`
     mealCat.innerHTML = `Meal Category: ${mealInfo.mealCategory}`
     mealRecipe.innerHTML= `<a href=${mealInfo.mealInstructions} target="_blank">Recipe</a>`

     
     
    
  }
catch (error) {
console.log(error)
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