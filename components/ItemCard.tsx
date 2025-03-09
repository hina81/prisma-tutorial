import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

function ItemCard() {
  return (
    <div>
      <Card className="cursor-pointer transition-all hover:shadow-md p-0">
        <Image
          src="/default_image.png"
          alt="マグロ"
          width={200}
          height={150}
          className="w-full h-auto rounded-t-lg"
        />
        <CardHeader className="mb-4">
          <CardTitle className="text-lg">マグロ</CardTitle>
          <CardDescription className="text-sm font-medium">
            ¥380
          </CardDescription>
          <Button className="bg-sky-500 text-white hover:bg-sky-600">選択する</Button>
        </CardHeader>
      </Card>
    </div>
  );
}

export default ItemCard;
