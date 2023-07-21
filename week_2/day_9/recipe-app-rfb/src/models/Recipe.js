export class Recipe {
    constructor(id, name, ingredients, instructions) {
      this.id = id;
      this.name = name;
      this.ingredients = ingredients;
      this.instructions = instructions;
    }
  
    static fromJson(json) {
      return new Recipe(json.id, json.name, json.ingredients, json.instructions);
    }
  }