/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `SavedDeal` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `SavedDeal` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `SavedDeal` table. All the data in the column will be lost.
  - Added the required column `name` to the `SavedDeal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `SavedDeal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SavedDeal" DROP COLUMN "imageUrl",
DROP COLUMN "link",
DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
