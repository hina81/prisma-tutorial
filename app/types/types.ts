export interface itemData {
  id: number;
  itemCategoryId: number;
  name: string;
  thumbnailUrl: string;
  price: number;
  isAvailable: boolean;
  availableOptionCategories: AvailableOptionCategoryData[];
}

export interface itemCategoryData {
  id: number;
  name: string;
  items: itemData[];
}

export interface optionsData {
  id: number;
  name: string;
  price: number;
  optionCategoryId: number;
}

export interface AvailableOptionCategoryData {
  id: number;
  itemId: number;
  optionCategoryId: number;
}


export interface OptionCategory {
  id: number;
  name: string;
  multiSelectable: boolean;
  options: optionsData[];
  availableOptionCategories: AvailableOptionCategoryData[]
}