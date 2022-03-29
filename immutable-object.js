/*
2. We have a recipe object as follows:
    recipe = {
        name: “Spaghetti Bolognese”,
        ingredients: [“egg”, “salt”]
    }
Assuming that this object is immutable, write code to
- Add a new ingredient (“cream”)
- Replace “egg” with “egg white”
- Remove an ingredient (“egg”)
*/

let recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
};

// Add a new ingredient (“cream”)
let recipeClone = { ...recipe, ingredients: [...recipe.ingredients, "cream"] };

// Replace “egg” with “egg white”
recipeClone = {
  ...recipe,
  ingredients: [
    ...recipe.ingredients.map((item) => (item === "egg" ? "egg white" : item)),
  ],
};

// Remove an ingredient (“egg”)
recipeClone = {
  ...recipe,
  ingredients: [...recipe.ingredients.filter((item) => item !== "egg")],
};

console.log(recipeClone);
