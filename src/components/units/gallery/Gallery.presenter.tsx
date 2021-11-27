import { MouseEvent } from "react";
import {
  MainWrapper,
  Title,
  Resume,
  ProjectBox,
  ProjectName,
  ProjectWrapper,
  RowWrapper,
  ButtonWrapper,
  ShowDetail,
  MoveToGit,
} from "./Gallery.styles";

interface IGalleryProps {
  onClickMoveToNotion: (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function GalleryUI(props: IGalleryProps) {
  return (
    <MainWrapper>
      <Title>소통하는 프론트엔드 엔지니어 신동원입니다.</Title>
      <Resume
        id="https://hospitable-cathedral-a62.notion.site/a2a41ca3e59a4d8faddb04fbedc53b13"
        onClick={props.onClickMoveToNotion}
      >
        이력서 보기
      </Resume>
      <RowWrapper>
        <ProjectWrapper>
          <ProjectBox src="/project/pengsooz.png"></ProjectBox>
          <ProjectName>코드캠프 팀 프로젝트 : PENGSOOZ</ProjectName>
          <ButtonWrapper>
            <ShowDetail
              id="https://hospitable-cathedral-a62.notion.site/dc1f631ce3cb4ad5af292c1afac5232c"
              onClick={props.onClickMoveToNotion}
            >
              자세히보기
            </ShowDetail>
            <MoveToGit
              id="https://github.com/luckychdl/pengsooz"
              onClick={props.onClickMoveToNotion}
            >
              Github
            </MoveToGit>
          </ButtonWrapper>
        </ProjectWrapper>
        <ProjectWrapper>
          <ProjectBox src="/project/usedMarket.png"></ProjectBox>
          <ProjectName>코드캠프 개인 프로젝트 : USEDMARKET</ProjectName>
          <ButtonWrapper>
            <ShowDetail
              id="https://hospitable-cathedral-a62.notion.site/USEDMARKET-007b76f320f34e09b7cfcd0930653d3c"
              onClick={props.onClickMoveToNotion}
            >
              자세히보기
            </ShowDetail>
            <MoveToGit
              id="https://github.com/luckychdl/Codecamp"
              onClick={props.onClickMoveToNotion}
            >
              Github
            </MoveToGit>
          </ButtonWrapper>
        </ProjectWrapper>
        <ProjectWrapper>
          <ProjectBox src="/project/butfit.png"></ProjectBox>
          <ProjectName>토이 프로젝트 : BUTFIT SEOUL</ProjectName>
          <ButtonWrapper>
            <ShowDetail
              id="https://hospitable-cathedral-a62.notion.site/Toy-Project-BUTFIT-1795b4188bbb432fa40aaa1098f4fcf5"
              onClick={props.onClickMoveToNotion}
            >
              자세히보기
            </ShowDetail>
            <MoveToGit
              id="https://github.com/luckychdl/toyproject"
              onClick={props.onClickMoveToNotion}
            >
              Github
            </MoveToGit>
          </ButtonWrapper>
        </ProjectWrapper>
        <ProjectWrapper>
          <ProjectBox src="/project/beer.png"></ProjectBox>
          <ProjectName>토이 프로젝트 : BEER</ProjectName>
          <ButtonWrapper>
            <ShowDetail
              id="https://hospitable-cathedral-a62.notion.site/Toy-Project-BEER-fe2b4c4fce124b13b76b4327cf993106"
              onClick={props.onClickMoveToNotion}
            >
              자세히보기
            </ShowDetail>
            <MoveToGit
              id="https://github.com/luckychdl/tradir"
              onClick={props.onClickMoveToNotion}
            >
              Github
            </MoveToGit>
          </ButtonWrapper>
        </ProjectWrapper>
        <ProjectWrapper>
          <ProjectBox src="/project/traiding.png"></ProjectBox>
          <ProjectName>토이 프로젝트 : TRAIDING</ProjectName>
          <ButtonWrapper>
            <ShowDetail
              id="https://hospitable-cathedral-a62.notion.site/Toy-Project-TRAIDING-e93cf801965243ac9300f31829605b20"
              onClick={props.onClickMoveToNotion}
            >
              자세히보기
            </ShowDetail>
            <MoveToGit
              id="https://github.com/luckychdl/ateamventures-codingtest"
              onClick={props.onClickMoveToNotion}
            >
              Github
            </MoveToGit>
          </ButtonWrapper>
        </ProjectWrapper>
      </RowWrapper>
    </MainWrapper>
  );
}
