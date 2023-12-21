"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { NextUIProvider } from "@nextui-org/react";
import { Card } from "./Component";
import { getOngoingAnime } from "@/lib/getOngoingAnime";

let page = 1;

export default function Page() {
  const [latest, setLatest] = useState([]);
  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView && page <= 3) {
      setIsLoading(true);
      const delay = 10;

      const timeoutId = setTimeout(() => {
        getOngoingAnime(page).then((res) => {
          setLatest([...latest, ...res]);
          page++;
          console.log(page)
        });

        setIsLoading(false);
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [inView, latest, isLoading]);

  return (
    <NextUIProvider>
      <div className="w-full h-max rounded-full bg-surfaceMixed-300">
        <h1 className="text-inherit p-3">Latest Anime</h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4" >
        {latest.map((anime, index) => (
          <Card key={index} anime={anime} />
        ))}
      </div>
      <div ref={ref}>
        Bentar loding
      </div>
    </NextUIProvider>
  );
}
