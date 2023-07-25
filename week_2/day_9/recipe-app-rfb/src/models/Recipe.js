export class Recipe {
    constructor(id, name, ingredients, instructions, favorite, userId) {
      this.id = id;
      this.name = name;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.favorite = favorite;
      this.userId = userId;
    }
  
    static fromJson(json) {
      return new Recipe(json.id, json.name, json.ingredients, json.instructions, json.favorite, json.userId);
    }
  }