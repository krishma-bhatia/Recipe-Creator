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

    //save to local storage
    save()
    {
        //Stringify the array and call setItem F'n
        const recipeArrayToSave = JSON.stringify(this._recipes);
        localStorage.setItem("recipes", recipeArrayToSave);
        //stringify current Id and save to local storage as its needed for genrating new IDs for creating recipe
        const stringifiedCurrentId = JSON.stringify(this._currentId);
        localStorage.setItem("Current Id", stringifiedCurrentId);
    }

    //load recipes from local storage to browser
    load()
    {
        //call getItem and parse the recipe array and current id
        const recipes = localStorage.getItem("recipes");

        if(recipes)
        {
            this._recipes = JSON.parse(recipes);
            console.log(this._recipes)
        }


        const currentId = localStorage.getItem("Current Id");

        if(currentId)
        {
            this._currentId = Number(currentId);
        }
    }

        
    //get recipe by id if needed
    getRecipeById(id){
         //find the Recipe Array index through recipe Id 
       let index = this._recipes.findIndex(matchId);

       //nested helper function to match Id
       function matchId(recipe){
           return (recipe.id === id)
       }
       return this._recipes[index];
    }

    updateRecipe(id,name,ingredients,instructions){
        let recipe = this.getRecipeById(id);
        recipe.name = name;
        recipe.ingredients = ingredients;
        recipe.instructions = instructions;
    }
}

//to create Recipe card
const createHtmlCard = (recipe) =>{
    return (`<div class = "card" id = "${recipe.id}">
                        <div class="recipe-info">
                            <h3>${recipe.name}</h3>
                            <h4>Ingredients</h4>
                            <div>${recipe.ingredients}</div>
                            <h4>Instructions</h4>
                            <div>${recipe.instructions}</div>
                        </div>
                        <div class = "card-footer">
                        <button id = "deleteBtn">Delete</button>
                        <button id = "updateBtn">Update</button>
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