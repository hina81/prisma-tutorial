/*
  Warnings:

  - The primary key for the `AvailableOptionCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `AvailableOptionCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ItemCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ItemCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Option` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Option` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OptionCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OptionCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrderItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrderItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrderItemOption` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrderItemOption` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Table` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Table` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `itemId` on the `AvailableOptionCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `optionCategoryId` on the `AvailableOptionCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tableId` on the `Customer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `itemCategoryId` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `optionCategoryId` on the `Option` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `customerId` on the `OrderItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `itemId` on the `OrderItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `orderItemId` on the `OrderItemOption` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `optionId` on the `OrderItemOption` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "AvailableOptionCategory" DROP CONSTRAINT "AvailableOptionCategory_itemId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableOptionCategory" DROP CONSTRAINT "AvailableOptionCategory_optionCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_tableId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_itemCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_optionCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_customerId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItemOption" DROP CONSTRAINT "OrderItemOption_optionId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItemOption" DROP CONSTRAINT "OrderItemOption_orderItemId_fkey";

-- AlterTable
ALTER TABLE "AvailableOptionCategory" DROP CONSTRAINT "AvailableOptionCategory_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "itemId",
ADD COLUMN     "itemId" INTEGER NOT NULL,
DROP COLUMN "optionCategoryId",
ADD COLUMN     "optionCategoryId" INTEGER NOT NULL,
ADD CONSTRAINT "AvailableOptionCategory_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "tableId",
ADD COLUMN     "tableId" INTEGER NOT NULL,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "itemCategoryId",
ADD COLUMN     "itemCategoryId" INTEGER NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ItemCategory" DROP CONSTRAINT "ItemCategory_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ItemCategory_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Option" DROP CONSTRAINT "Option_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "optionCategoryId",
ADD COLUMN     "optionCategoryId" INTEGER NOT NULL,
ADD CONSTRAINT "Option_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OptionCategory" DROP CONSTRAINT "OptionCategory_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "OptionCategory_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "customerId",
ADD COLUMN     "customerId" INTEGER NOT NULL,
DROP COLUMN "itemId",
ADD COLUMN     "itemId" INTEGER NOT NULL,
ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrderItemOption" DROP CONSTRAINT "OrderItemOption_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "orderItemId",
ADD COLUMN     "orderItemId" INTEGER NOT NULL,
DROP COLUMN "optionId",
ADD COLUMN     "optionId" INTEGER NOT NULL,
ADD CONSTRAINT "OrderItemOption_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Table" DROP CONSTRAINT "Table_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Table_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItemOption" ADD CONSTRAINT "OrderItemOption_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItemOption" ADD CONSTRAINT "OrderItemOption_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemCategoryId_fkey" FOREIGN KEY ("itemCategoryId") REFERENCES "ItemCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_optionCategoryId_fkey" FOREIGN KEY ("optionCategoryId") REFERENCES "OptionCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableOptionCategory" ADD CONSTRAINT "AvailableOptionCategory_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableOptionCategory" ADD CONSTRAINT "AvailableOptionCategory_optionCategoryId_fkey" FOREIGN KEY ("optionCategoryId") REFERENCES "OptionCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
