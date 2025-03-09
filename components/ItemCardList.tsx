import React from "react";
import ItemCard from "./ItemCard";
import { itemData } from "@/app/types/types";

interface itemAllDataProps {
  allItems: itemData[];
}

const ItemCardList = ({ allItems }: itemAllDataProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {allItems.map((itemData: itemData) => (
        <ItemCard key={itemData.id} itemData={itemData} />
      ))}
    </div>
  );
};

export default ItemCardList;
