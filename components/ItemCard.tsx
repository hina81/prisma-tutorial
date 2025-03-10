import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { itemData } from "@/app/types/types";

interface itemDataProps {
  itemData: itemData;
}

const ItemCard = ({ itemData }: itemDataProps) => {
  const { name, thumbnailUrl, price, isAvailable, itemCategoryId } = itemData;
  // isAvailableはトッピングつけれるかつけれないか
  // itemCategoryIdは寿司:1かドリンク:2かサイドメニュー:3か

  return (
    <div>
      <Card className="cursor-pointer transition-all hover:shadow-md p-0">
        <Image
          src={thumbnailUrl}
          alt={name}
          width={200}
          height={150}
          className="w-full h-auto rounded-t-lg"
        />
        <CardHeader className="mb-4">
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription className="text-sm font-medium">
            ¥{price}
          </CardDescription>
          <Button className="bg-sky-500 text-white hover:bg-sky-600">
            選択する
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ItemCard;
