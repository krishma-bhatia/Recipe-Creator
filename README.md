# Recipe-Creator
Project to Create a Recipe Creator App

**Functionality/Purpose**
- Add recipe with name, ingredients and instructions
- Display Recipes
- Update Recipe
- Delete Recipe
- Store recipes in Local Storage

** Draft Mobile-First Design**
 
 
![image](https://user-images.githubusercontent.com/83254827/124223984-2af8aa80-db48-11eb-87d1-eb6e18a01249.png)


**Layout**
1) Header
   - Logo
   - Title
   - Button to add recipe
2) Form Section to Add recipes and Update Recipes(Initially Hidden and gets displayed when 'Add Recipe' Button is clicked or 'Update Recipe' Button is clicked)
3) Display Section to display recipe cards

**Software used:**
- HTML5 (File: index.html)
   Render HTML elements
- CSS3 (File: styles.css)
   Add styling to Web page 
- Vanilla JavaScript 
   (Files: 
         -RecipeManager.js(Contains data structure and methods to manipulate the datastructure)
         -index.js ( Instantiate Class object,capture events and Event Handlers)
         )
         
- VS Code
   Edit Code and manage files
- Figma
   To create draft look
- Chrome dev Tools
   Debugging and Tesing F'nality
- Local Storage
   To store recipes
- Github
    Version Management


**Data Structure:**

class RecipeBook{
Data:
Array of objects
object:-ID
       -Name
       -Ingredients
       -Instructions
 Methods:
 Function Add Recipe
 Function DeleteRecipe
 Function Get Recipe by Id
 Function to update Recipe
}

**How to use the App**
- The recipes already added are displayed as cards
- To add a recipe, click the button on top right "Create a new Recipe".A form to add recipe will be displayed.Please ensure to fill all fields and click "Add Recipe"
- To update recipe, Click update button on the recipe that needs to be updated.A form to update recipe will be displayed.Please ensure to fill all fields and click "Update Recipe"
- To delete recipe, Click Delete Button on the recipe that needs to be deleted.

**Link For the App**
https://krishma-bhatia.github.io/Recipe-Creator/



