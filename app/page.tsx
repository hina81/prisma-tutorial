import ItemCardList from "@/components/ItemCardList";
import MenuBar from "@/components/Menu-bar";
import { itemData } from "./types/types";

async function getAllItems() {
  const response = await fetch("http://localhost:3000/api/items", {
    next: { revalidate: 300 },
  });

  const allItems: itemData[] = await response.json();
  return allItems;
}

export default async function Home() {
  const allItems = await getAllItems();
  return (
    <div className="m-10">
      <MenuBar />
      <ItemCardList allItems={allItems} />
    </div>
  );
}
