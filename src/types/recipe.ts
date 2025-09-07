export interface Recipe {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  kashrutNotes?: string;
  imageSrc?: string;
  relatedProducts?: number[];
  videoSrc?: string; // Optional video for recipe
  bigImg?: string; // Optional large image to display after instructions
  bigImg2?: string; // Optional second large image
}