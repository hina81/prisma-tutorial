import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function MenuBar() {
  return (
    <div>
      <Menubar className="rounded-lg border shadow-sm mb-5">
        <MenubarMenu>
          <MenubarTrigger className="font-medium">寿司</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">ドリンク</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-medium">
            サイドメニュー
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
