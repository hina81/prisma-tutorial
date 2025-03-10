export interface itemData {
  id: number;
  itemCategoryId: number;
  name: string;
  thumbnailUrl: string;
  price: number;
  isAvailable: boolean;
}

export interface itemCategoryData {
  id: number;
  name: string;
  items: itemData[];
}
