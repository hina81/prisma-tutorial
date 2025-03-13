import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { itemData, optionsData } from "@/app/types/types";
import ItemDetail from "@/app/modal/itemDetail";

interface itemDataProps {
  itemData: itemData;
  options: optionsData[];
}

const ItemCard = ({ itemData, options }: itemDataProps) => {
  const { name, thumbnailUrl, price, isAvailable} = itemData;
  console.log(options)
  // isAvailableはトッピングつけれるかつけれないか
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
          <ItemDetail itemData={itemData} />
        </CardHeader>
      </Card>
    </div>
  );
};

export default ItemCard;
