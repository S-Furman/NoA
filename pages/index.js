import Head from "next/head";

import MainCard from "../components/MainCard/MainCard";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const cards = [
    {
      title: `Loose weight Add muscle Stay alert`,
      content:
        "Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum...  Lorem Ipsum... Lorem Ipsum...",
      img: "/CardPic2.jpg",
      alt: "Smoothie",
    },
    {
      title: "Every smoothie is an experience. Make it count!",
      content:
        "Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum...  Lorem Ipsum... Lorem Ipsum...",
      img: "/CardPic.jpg",
      alt: "Smoothie",
    },
  ];

  return (
    <>
      <Head>
        <title>Smoothie Delight</title>
        <meta
          name="description"
          content="Healthy, delicious smoothie that allows you to looose weight and add muscle. Every smoothie is an experience. Make it count! "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainCard />
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            imgPath={card.img}
            alt={card.alt}
          />
        );
      })}
      <Footer />
    </>
  );
}
