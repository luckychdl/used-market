import { useRouter } from "next/router";
import { MouseEvent } from "react";
import GalleryUI from "./Gallery.presenter";

export default function Gallery() {
  const router = useRouter();
  const onClickMoveToNotion = (e: MouseEvent) => {
    const id = (e.target as Element).id;
    router.push(`${id}`);
  };

  return <GalleryUI onClickMoveToNotion={onClickMoveToNotion} />;
}
