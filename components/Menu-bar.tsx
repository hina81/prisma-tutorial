import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { itemCategoryData } from "@/app/types/types";

interface itemCategoryProps {
  itemCategory: itemCategoryData[];
}

const MenuBar = ({ itemCategory }: itemCategoryProps) => {
  return (
    <div>
      <Menubar className="rounded-lg border shadow-sm mb-5">
        {itemCategory.map((category: itemCategoryData) => (
          <MenubarMenu key={category.id}>
            <MenubarTrigger className="font-medium">{category.name}</MenubarTrigger>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
};
export default MenuBar;
