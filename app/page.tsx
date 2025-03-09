import ItemCardList from "@/components/ItemCardList";
import MenuBar from "@/components/Menu-bar";
import next from "next";


export default async function Home() {
  const response = await fetch("http://localhost:3000/api/items", {
    next: { revalidate: 300 },
  });

  const allItems = await response.json();
  console.log(allItems)
  return (
    <div className="m-10">
      <MenuBar />
      <ItemCardList />
    </div>
  );
}
