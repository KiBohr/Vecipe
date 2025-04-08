export interface IData {
  id: string;
  name: string;
  recipes: IRecipes[];
}

export interface IRecipes {
  id: string;
  name: string;
  servings: number;
  description: string;
  image: string;
  ingredients: IIngredients[];
}

export interface IIngredients {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  additional_info?: string;
}
