import { getComma } from "../../../../commons/libraries/utils";
import {
  TodayProductWrapper,
  TodayTitle,
  TodayWrapper,
  TodayImg,
  TodayName,
  TodayRemarks,
  TodayPrice,
  TodayTags,
  Wrapper,
} from "./today.styles";

const TodayUI = (props: any) => {
  return (
    <TodayProductWrapper>
      <TodayTitle>오늘 본 상품</TodayTitle>
      {props.basketData?.map((data: any) => (
        <Wrapper key={data._id}>
          <TodayImg
            src={`https://storage.googleapis.com/${data.images[0]}`}
            onClick={props.onClickMove(data)}
          />
          <TodayWrapper>
            <TodayName>{data.name}</TodayName>
            <TodayRemarks>{data.remarks}</TodayRemarks>
            <TodayPrice>{getComma(data.price)}원</TodayPrice>
            <TodayTags>{data.tags}</TodayTags>
          </TodayWrapper>
        </Wrapper>
      ))}
    </TodayProductWrapper>
  );
};

export default TodayUI;
