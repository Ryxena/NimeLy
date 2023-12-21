import React from "react";
import {Card as NextUiCard, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Card({ anime }) {
  return (
    <NextUiCard className="py-4">

      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{anime.title}</h4>
        <small className="text-default-500">{anime.total_episode}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={anime.title}
          className="object-cover rounded-xl"
          src={anime.thumb}
          width={150}
        />
      </CardBody>
    </NextUiCard>
  );
}
