/*
  Warnings:

  - You are about to drop the column `profileImage` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `qqOpenId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalSpace` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `useSpace` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "password", "username") SELECT "email", "id", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
