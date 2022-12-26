import PostCard from "@/components/PostCard";

import * as styles from "@/styles/pages";

import MainLayout from "@/layout/MainLayout";

export default function HomePage() {
  const 게시물 = [
    {
      thumbnail: "https://source.unsplash.com/random/1",
      title: "여기는 타이틀이 들어갈 자리입니다.",
      description: "여기는 설명이 들어갈 자리입니다.",
      date: new Date(),
      tag: [],
    },
    {
      thumbnail: "https://source.unsplash.com/random/2",
      title: "짧은 타이틀",
      description: "여기는 설명이 들어갈 자리입니다.",
      date: new Date(),
      tag: [],
    },
    {
      thumbnail: "https://source.unsplash.com/random/3",
      title: "적당한 타이틀, 적당한 타이틀",
      description: "여기는 설명이 들어갈 자리입니다.",
      date: new Date(),
      tag: [],
    },
    {
      thumbnail: "https://source.unsplash.com/random/4",
      title:
        "긴 타이틀, 긴 타이틀, 긴 타이틀, 긴 타이틀, 긴 타이틀, 긴 타이틀, 긴 타이틀, 긴 타이틀, 긴 타이틀",
      description: "여기는 설명이 들어갈 자리입니다.",
      date: new Date(),
      tag: [],
    },
    {
      thumbnail: "https://source.unsplash.com/random/5",
      title: "",
      description: "여기는 설명이 들어갈 자리입니다.",
      date: new Date(),
      tag: [],
    },
  ];

  return (
    <MainLayout>
      <div css={styles.postListWrapper}>
        {게시물.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </MainLayout>
  );
}
