import ItemCardList from "@/components/ItemCardList";
import MenuBar from "@/components/Menu-bar";

export default function Home() {
  return (
    <div className="m-10">
      <MenuBar />
      <ItemCardList />
    </div>
  );
}
