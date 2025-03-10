import ItemCardList from "@/components/ItemCardList";
import MenuBar from "@/components/Menu-bar";
import { itemCategoryData } from "./types/types";

async function getItemCategory() {
  const response = await fetch("http://localhost:3000/api/item-categories", {
    next: { revalidate: 300 },
  });
  const itemCategory: itemCategoryData[] = await response.json();
  return itemCategory;
}

export default async function Home() {
  const itemCategory = await getItemCategory();
  // itemCategory から items を取り出す
  // flatMap でitems配列を1次元に
  const allItems = itemCategory.flatMap((category) => category.items);

  return (
    <div className="m-10">
      {/* menuBarで選択したcategoryのみitemCardListで表示 */}
      <MenuBar itemCategory={itemCategory} />
      <ItemCardList allItems={allItems} />
    </div>
  );
}
