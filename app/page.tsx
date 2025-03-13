import { itemCategoryData, itemData } from "./types/types";
import ClientHome from "@/components/ClientHome";

async function getItemCategory() {
  const response = await fetch("http://localhost:3000/api/item-categories", {
    next: { revalidate: 300 },
  });
  const itemCategory: itemCategoryData[] = await response.json();
  return itemCategory;
}

async function getAllItems() {
  const response = await fetch("http://localhost:3000/api/item", {
    next: { revalidate: 300 },
  });
  const items: itemData[] = await response.json();
  console.log(items);
  const allItems = items;
  // 各オプションに itemId を付与して展開
  const allOptions = items.flatMap((item: any) =>
    item.availableOptionCategories.flatMap((category: any) =>
      category.optionCategory.options.map((option: any) => ({
        ...option,
        itemId: item.id, // どの item に属するオプションかを明確にする
        categoryId: category.optionCategory.id, // オプションカテゴリIDも保持
        categoryName: category.optionCategory.name, // カテゴリ名も保持
      }))
    )
  );

  return { allItems, allOptions };
}

export default async function Home() {
  const itemCategory = await getItemCategory();
  const { allItems, allOptions } = await getAllItems();

  return (
    <div className="m-10">
      <ClientHome
        itemCategory={itemCategory}
        allItems={allItems}
        allOptions={allOptions}
      />
    </div>
  );
}
