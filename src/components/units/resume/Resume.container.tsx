import { useRouter } from "next/router";
import { MouseEvent } from "react";
import ResumeUI from "./Resume.presenter";

export default function Resume() {
  const router = useRouter();
  const onClickMoveToNotion = (e: MouseEvent) => {
    const id = (e.target as Element).id;
    router.push(`${id}`);
  };

  return <ResumeUI onClickMoveToNotion={onClickMoveToNotion} />;
}
