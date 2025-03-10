import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { itemCategoryData } from "@/app/types/types";

interface itemCategoryProps {
  itemCategory: itemCategoryData[];
  onSelectCategory: (id: number | null) => void;
}

const MenuBar = ({ itemCategory, onSelectCategory }: itemCategoryProps) => {
  return (
    <div>
      <Menubar className="rounded-lg border shadow-sm mb-5">
        {itemCategory.map((category) => (
          <MenubarMenu key={category.id}>
            <MenubarTrigger
              className="font-medium"
              onClick={() => onSelectCategory(category.id)}
            >
              {category.name}
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
};
export default MenuBar;
