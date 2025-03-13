"use client";

import React, { useState } from "react";
import MenuBar from "@/components/Menu-bar";
import ItemCardList from "@/components/ItemCardList";
import { itemCategoryData, itemData, optionsData } from "@/app/types/types";

interface ClientHomeProps {
  itemCategory: itemCategoryData[];
  allItems: itemData[];
  allOptions: optionsData[];
}

const ClientHome = ({ itemCategory, allItems, allOptions }: ClientHomeProps) => {
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
        allOptions={allOptions}
        selectedCategoryId={selectedCategoryId}
      />
    </div>
  );
};

export default ClientHome;
