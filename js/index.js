//This file contains code to handle eventlisteners

import {RecipeManager} from './recipeManager.js';

//Instatiating RecipeBook
const RecipeBook = new RecipeManager();
//load tasks from local storage to browser and render
RecipeBook.load();
RecipeBook.render();


/**************F'nality for adding the recipe***********/

const addRecipeBtn = document.getElementById('addRecipeBtn');

addRecipeBtn.addEventListener('click', addRecipe);

//event handler to display form to add recipe
function addRecipe() {
    //display form
    document.getElementById('formArea').style.display = "flex";//set as flex to add responsive form
    document.getElementById('add').style.display = "block";
    //Capture form submit button and call f'n to add recipe
    let form = document.getElementById('form');
    form.addEventListener('submit',addRecipeToArray);
    
}


//Event handle to add recipe
function addRecipeToArray(event){
    event.preventDefault();
    //Capture recipe form inputs values
    let recipeName = document.getElementById('recipeName');
    let ingredients = document.getElementById('ingredients');
    let instructions = document.getElementById('instructions');
    //let img = document.getElementById('img');
    //console.log("Image " + img.value)
    //add recipe to array
    RecipeBook.addRecipe(recipeName.value,ingredients.value,instructions.value,);
    //render recipe array to browser
    RecipeBook.render();
    //save to local storage
    RecipeBook.save();
    document.getElementById('form').reset();
    document.getElementById('formArea').style.display = "none";
}

/******************Functionality for deleting the recipe***************/
//Capture delete button and call f'n to delete recipe
const deleteBtn = document.getElementById('recipeDisplay');
deleteBtn.addEventListener('click',deleteRecipe);

//event handler to delete recipe
function deleteRecipe(event){
    console.log(event.target.id);
    if(event.target.id === 'deleteBtn') //if delete button clicked
    {
        console.log("deletbtn clicked");
        //delete from array
        RecipeBook.deleteRecipe(event.target.parentElement.parentElement.id);
        
        //save updates array to browser storage
        RecipeBook.save();
        //render recipe array to browser
        RecipeBook.render();
    }
}

/*****************F'nality for updating the recipe******************/

//Capture update Button, populate the update form  and update recipe array
const updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click',updateRecipe);

//helper function to poulate the updation form of recipe
function populateFormForUpdation(id){

    const recipe = RecipeBook.getRecipeById(id);
      //Capture recipe form inputs values
      let recipeName = document.getElementById('recipeName');
      let ingredients = document.getElementById('ingredients');
      let instructions = document.getElementById('instructions');

    recipeName.value = recipe.name;
    ingredients.value = recipe.ingredients;
    instructions.value = recipe.instructions;
}

//global scope as its being shared by two f'ns
let updateRecipeId = 0;

//event handler to update array when update button on the form is clicked
function updateRecipeArray(event){
    
    event.preventDefault();
     //Capture recipe form inputs values
     let recipeName = document.getElementById('recipeName');
     let ingredients = document.getElementById('ingredients');
     let instructions = document.getElementById('instructions');
     console.log(updateRecipeId)
     //Update Recipe Array
    RecipeBook.updateRecipe(updateRecipeId,recipeName.value,ingredients.value,instructions.value);
    RecipeBook.save();
    RecipeBook.render();
    document.getElementById('formArea').style.display = "none";
    document.getElementById('updateRecipeBtn').style.display = "none";
    document.getElementById('add').style.display = "block";
    document.getElementById('form').reset();
}
//event handler to update recipe
function updateRecipe(event){
    
    console.log(event.target.id);
    if(event.target.id === 'updateBtn') //if update button clicked on recipe card
    {
        updateRecipeId = parseInt(event.target.parentElement.parentElement.id);
        console.log("updatebutton clicked")
        
        populateFormForUpdation(updateRecipeId);
        //display update button and hide add recipe button
        document.getElementById('formArea').style.display = "flex";
        document.getElementById('updateRecipeBtn').style.display = "block";
        document.getElementById('add').style.display = "none";
        
        //capture update button on form
        let updateRecipeBtn = document.getElementById('updateRecipeBtn');
        updateRecipeBtn.addEventListener("click",updateRecipeArray);
        

    }
}


/***********Closing the form *****************/
const formCloseBtn = document.getElementById('formCloseBtn');
formCloseBtn.addEventListener("click",()=>{document.getElementById('formArea').style.display = "none";
document.getElementById('form').reset();});
