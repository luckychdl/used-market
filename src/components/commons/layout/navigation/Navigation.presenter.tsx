import {
  Wrapper,
  FreeBoard,
  Market,
  MyPage,
  Line,
  Gallery,
} from "./Navigation.styles";

interface ILayoutNavigationUIProps {
  onClickMoveToBoard: () => void;
  onClickMoveToMarket: () => void;
  onClickMoveToMypage: () => void;
  onClickMoveToResume: () => void;
}
export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <Gallery onClick={props.onClickMoveToResume}>이력서</Gallery>
      <Line>|</Line>
      <FreeBoard onClick={props.onClickMoveToBoard}>자유게시판</FreeBoard>
      <Line>|</Line>
      <Market onClick={props.onClickMoveToMarket}>중고마켓</Market>
      <Line>|</Line>
      <MyPage onClick={props.onClickMoveToMypage}>마이페이지</MyPage>
    </Wrapper>
  );
}
