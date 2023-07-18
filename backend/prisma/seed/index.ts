import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// type
import type { Prisma } from "@prisma/client";

const emblems = [
  "iron",
  "bronze",
  "silver",
  "gold",
  "platinum",
  "diamond",
  "master",
  "grandmaster",
  "challenger",
];

/** 가짜 유저 9개 반환하는 함수 */
const getMocUser = (): Prisma.UserCreateManyInput[] =>
  emblems.map((emblem) => ({
    id: emblem + 1,
    password: "$2b$10$BXfcX.GEU/nY5C0bqXB8ZuLQdcJXwBILNyZCwCFAj74b9zRhQb4sS", // 123456789a!
    nickname: emblem,
    summonerName: emblem,
    avatar: `/images/emblem/${emblem}.png`,
  }));

/** 가짜 게시글 30개 반환하는 함수 */
const getMocPost = (): Prisma.PostCreateManyInput[] =>
  Array(30)
    .fill(null)
    .map((v, i) => ({
      title: "대충 제목" + i,
      content: "🐶🐕🫥\n🍕👏\n대충 내용\n☔🎥\n📮🏅🕕" + i,
      thumbnail: `/images/emblem/${
        emblems[Math.floor(Math.random() * emblems.length)]
      }.png`,
      userIdx: Math.floor(Math.random() * emblems.length),
      viewCount: Math.floor(Math.random() * 100),
      createdAt: new Date(Date.now() - i * 1000 * 60),
    }));

async function main() {
  // 가짜 유저들 생성
  await prisma.user.createMany({
    skipDuplicates: true,
    data: getMocUser(),
  });

  // 가짜 게시글들 생성
  await prisma.post.createMany({
    skipDuplicates: true,
    data: getMocPost(),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
  });
