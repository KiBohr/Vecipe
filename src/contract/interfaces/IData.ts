export interface ICategories {
  id: string;
  name: string;
  recipes: IRecipes[];
}

export interface IRecipes {
  category_id?: string;
  id: string;
  name: string;
  servings: number;
  description: string;
  instructions: string;
  image: string;
  ingredients?: IIngredients[];
}

export interface IIngredients {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  additional_info?: string;
}
