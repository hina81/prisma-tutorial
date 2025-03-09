import ItemCardList from "@/components/ItemCardList";
import MenuBar from "@/components/Menu-bar";
import { prisma } from "./lib/prisma";

export default function Home() {
  return (
    <div className="m-10">
      <MenuBar />
      <ItemCardList />
    </div>
  );
}
