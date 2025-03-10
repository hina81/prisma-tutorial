import ItemCardList from "@/components/ItemCardList";
import MenuBar from "@/components/Menu-bar";
import { itemData, itemCategoryData } from "./types/types";

async function getAllItems() {
  const response = await fetch("http://localhost:3000/api/items", {
    next: { revalidate: 300 },
  });

  const allItems: itemData[] = await response.json();
  return allItems;
}

async function getItemCategory() {
  const response = await fetch("http://localhost:3000/api/item-categories", {
    next: { revalidate: 300 },
  });
  const itemCategory: itemCategoryData[] = await response.json();
  return itemCategory;
}

export default async function Home() {
  const allItems = await getAllItems();
  const itemCategory = await getItemCategory();
  return (
    <div className="m-10">
      {/* menuBarで選択したcategoryのみitemCardListで表示 */}
      <MenuBar itemCategory={itemCategory} />
      <ItemCardList allItems={allItems} />
    </div>
  );
}
