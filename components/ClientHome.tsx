"use client";

import React, { useState } from "react";
import MenuBar from "@/components/Menu-bar";
import ItemCardList from "@/components/ItemCardList";
import { itemCategoryData, itemData } from "@/app/types/types";

interface ClientHomeProps {
  itemCategory: itemCategoryData[];
  allItems: itemData[];
}

const ClientHome = ({ itemCategory, allItems }: ClientHomeProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  return (
    <div>
      <MenuBar
        itemCategory={itemCategory}
        onSelectCategory={setSelectedCategoryId}
      />
      <ItemCardList
        allItems={allItems}
        selectedCategoryId={selectedCategoryId}
      />
    </div>
  );
};

export default ClientHome;
