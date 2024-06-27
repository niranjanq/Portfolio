import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-500">
      <div className="flex h-20 items-center justify-center">
        <span className="font-bold uppercase text-2xl text-neutral-200 hover:text-teal-200 hover:cursor-pointer duration-1000">
          Projects
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-30%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      {/* Mobile: vertical scroll */}
      <div className="block lg:hidden sm:overflow-y-auto sm:h-screen">
        <div className="flex flex-col items-center gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      </div>
      {/* Large devices: horizontal scroll */}
      <div className="hidden lg:flex sticky top-0 h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <a
      href={card.link}
      key={card.id}
      target="_blank"
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-125 text-center"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </a>
  );
};

export default Example;

const cards = [
  {
    url: "/preview.webp",
    title: "Laptop Price Predictor",
    link: "https://price-predictor-073.streamlit.app/",
    id: 1,
  },
  {
    url: "/2.png",
    title: "Serenity Steps",
    link: "https://serenitysteps.netlify.app/",
    id: 2,
  },
  {
    url: "/3.webp",
    title: "Poll App",
    link: "https://my-poll.vercel.app/",
    id: 3,
  },
  {
    url: "/4.webp",
    title: "GIF Vibes",
    link: "https://giphy-vibes.netlify.app/",
    id: 4,
  },
];
