//This file contains code to handle eventlisteners

import {RecipeManager} from './recipeManager.js';
const RecipeBook = new RecipeManager();

const addRecipeBtn = document.getElementById('addRecipeBtn');

addRecipeBtn.addEventListener('click', addRecipe);

function addRecipe() {
    //let recipe = RecipeBook.addRecipe('cake','sugar','bake');
    //recipe = RecipeBook.addRecipe('cake','sugar','bake');
    // <input type="text" id = 'recipeName'/>
    //         <label>Ingredients</label>
    //         <input type="text" id = 'ingredients'/>
    //         <label>Instructions</label>
    //         <input type="text" id = 'instructions'/>
    document.getElementById('formArea').style.display = "flex";
    let form = document.getElementById('form');
    form.addEventListener('submit',addRecipeToArray);
    
    //document.getElementById('display').innerHTML = recipe;
}

function addRecipeToArray(event){
    event.preventDefault();
    let recipeName = document.getElementById('recipeName');
    let ingredients = document.getElementById('ingredients');
    let instructions = document.getElementById('instructions');
    RecipeBook.addRecipe(recipeName.value,ingredients.value,instructions.value);
    RecipeBook.render();
    document.getElementById('form').reset();
    document.getElementById('formArea').style.display = "none";
}

//Functionality for deleting the recipe 
const deleteBtn = document.getElementById('recipeDisplay');
deleteBtn.addEventListener('click',deleteRecipe);

function deleteRecipe(event){
    console.log(event.target.id);
    if(event.target.id === 'deleteBtn')
    {
        console.log("deletbtn clicked")
        RecipeBook.deleteRecipe(event.target.parentElement.parentElement.id);
        RecipeBook.render();
    }
}

