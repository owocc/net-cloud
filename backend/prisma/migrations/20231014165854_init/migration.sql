-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "qqOpenId" TEXT,
    "useSpace" INTEGER NOT NULL,
    "totalSpace" INTEGER NOT NULL
);
