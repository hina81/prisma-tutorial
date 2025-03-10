"use client";
import ItemCard from "./ItemCard";
import { itemData } from "@/app/types/types";

interface itemAllDataProps {
  allItems: itemData[];
  selectedCategoryId: number | null;
}

const ItemCardList = ({ allItems, selectedCategoryId }: itemAllDataProps) => {
  const filterItems = selectedCategoryId
    ? allItems.filter((item) => item.itemCategoryId === selectedCategoryId)
    : allItems;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filterItems.map((item: itemData) => (
        <ItemCard key={item.id} itemData={item} />
      ))}
    </div>
  );
};

export default ItemCardList;
