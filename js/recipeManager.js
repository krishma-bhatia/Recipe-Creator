//This file contains structure to hold recipes
//helper function to create Htmll element
//to be defined

//class for storing and manipulating recipes
export class RecipeManager{
    //array of recipes(objects)
    //id for each recipe

    //Initialisation
    constructor(id = 0){
        this._currentId = id;
        this._recipes = [];
    }

    //geter tasks
    get recipes(){
        return this._recipes;
    }

    get currentId(){
        return this._currentId;
    }

    //add recipe to array
    addRecipe(name,ingredients,instructions)
    {
        const recipe = {
            id : ++this._currentId,
            name: name,
            ingredients: ingredients,
            instructions: instructions, 
        };
        console.log("in add recipe")
        console.log(this._recipes)

        //push to array
        this._recipes.push(recipe);

    }
    //render
    render(){
        let htmlRecipeCards = [];
        for(let recipe of this._recipes){
            let recipeCard = createHtmlCard(recipe);
            htmlRecipeCards.push(recipeCard);
        }
        document.getElementById('recipeDisplay').innerHTML = htmlRecipeCards.join('');
    }

    //delete Recipe from recipe array
    deleteRecipe(id){
       //find the Recipe Array index through recipe Id 
       let index = this._recipes.findIndex(matchId);

        //nested helper function to match Id
        function matchId(recipe){
            return (recipe.id === id)
        }
        //Remove recipe from recipe array through array splice
        this._recipes.splice(index,1);
    }
        
    //get recipe by id
}

//to create Recipe card
const createHtmlCard = (recipe) =>{
    return (`<div class = "card" id = "${recipe.id}">
                        <div>
                            <img src=""/>
                        </div>
                        <div class="recipe-info">
                            <h3>${recipe.name}</h3>
                            <div>${recipe.ingredients}</div>
                            <div>${recipe.instructions}</div>
                        </div>
                        <div>
                        <button id = "deleteBtn">Delete</button>
                        </div>
                    </div>`);
}
//tester code
// const recipeCreator = new RecipeManager();
// recipeCreator.addRecipe('cake','sugar','bake');
// recipeCreator.addRecipe('soup','salt','bacookke');
// console.log(recipeCreator.currentId);
// console.log(recipeCreator.recipes);
// recipeCreator.deleteRecipe(1);
// console.log(recipeCreator.recipes);