import styled from "@emotion/styled";

export const Main = styled.div`
  margin-bottom: 100px;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  /* height: 1602px; */
  padding: 84px 102px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 100px 100px 80px 100px;
`;
export const HeadWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SubWrapper = styled.div``;
export const Profile = styled.img`
  width: 46.67px;
  height: 46.67px;
  margin: 0 16.67px 24.67px 0;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 126px;
`;
export const Name = styled.div`
  font-size: 24px;
`;
export const Date = styled.div`
  width: 300px;
  font-size: 16px;
  color: #828282;
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 34px;
`;
export const Address = styled.div`
  width: 376px;
  height: 64px;
  background-color: gray;
  padding: 5px 10px 10px 0;
  text-align: end;
`;
export const Location = styled.img`
  width: 32px;
  height: 32px;
`;
export const Detail = styled.div`
  font-size: 18px;
  padding-bottom: 10px;
`;
export const SubDetail = styled.span`
  font-size: 18px;
  padding-top: 10px;
`;
export const LinkSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.img`
  margin-right: 25px;
  width: 32px;
  height: 32px;
`;

export const Border = styled.div`
  width: 996px;
  border: 1px solid #bdbdbd;
  margin-bottom: 80px;
`;
export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 36px;
`;
export const Image = styled.img`
  width: 996px;
  height: 480px;
  margin: 40px 0 40px 0;
`;
export const Content = styled.div`
  text-align: center;
  width: 996px;
  height: 96px;
  margin-bottom: 120px;
  font-size: 16px;
`;
// export const ReactPlayer = styled.div`
//   width: 486px;
//   height: 240px;
//   background-color: red;
// `;
export const LikeMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 120px;
  margin-top: 50px;
`;
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Score = styled.div`
  font-size: 18px;
  color: #ffd600;
`;
export const HateScore = styled.div`
  font-size: 18px;
  color: #828282;
`;
export const Like = styled.img`
  width: 28px;
  height: 22px;
  margin: 20px;
  color: #828282;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
    border-radius: 10px;
  }
`;
export const ButtonWrapper = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Button = styled.button`
  border: 1px solid #bdbdbd;
  width: 179px;
  height: 45px;
  color: #616161;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin-right: 24px;
  background-color: white;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
export const ReviewImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;
export const Review = styled.div`
  font-size: 18px;
`;
export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
`;
export const ReviewWriter = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 40px;
  border: 1px solid #bdbdbd;
  color: #828282;
`;
export const ReviewPassword = styled.input`
  width: 180px;
  height: 52px;
  color: #828282;
  border: 1px solid #bdbdbd;
  margin-right: 26px;
`;
export const Star = styled.img`
  width: 20px;
  height: 20px;
`;
export const ReviewWrite = styled.textarea`
  width: 1200px;
  height: 161px;
  resize: none;
  position: relative;
  margin: 0px 100px 0px 100px;
  font-size: 14px;
  line-height: 24px;
  padding: 20px;
  border: 1px solid #bdbdbd;
`;
export const ReviewBorder = styled.div`
  width: 1199px;
  border: 1px solid #bdbdbd;
  margin: 87px 100px 40px 100px;
`;
export const WriterWrapper = styled.div``;
export const ReviewSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
  margin: 0px 100px 20px 100px;
`;
export const ReviewButton = styled.button`
  position: absolute;
  left: 1209px;
  top: 108px;
  width: 91px;
  height: 52px;
  background: #000000;
  color: white;
  cursor: pointer;
`;
export const Text = styled.div`
  position: absolute;
  width: 43px;
  height: 24px;
  color: #bdbdbd;
  font-size: 14px;
  line-height: 24px;
  right: 1035px;
  top: 115px;
`;
export const TextWrapper = styled.div`
  position: relative;
  width: 1200px;
`;
export const FooterMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  margin-left: 100px;
`;
export const ReviewProfile = styled.img`
  width: 40px;
  height: 40px;
  margin: 46px 16px 20px 0;
`;
export const FooterWrapper = styled.div`
  display: flex;
`;
export const FooterSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 46px;
`;
export const ReviewName = styled.div`
  margin-right: 10px;
`;
export const YellowStar = styled.img`
  width: 20px;
  height: 20px;
`;
export const ReviewContents = styled.div`
  margin-top: 6px;
  color: #4f4f4f;
  font-size: 16px;
  line-height: 24px;
`;
export const FooterImg = styled.div`
  margin-top: 46px;
`;
export const Mode = styled.img`
  cursor: pointer;
`;
export const Clear = styled.img`
  cursor: pointer;
`;
export const ReviewDate = styled.div`
  margin-left: 156px;
  height: 38px;
  color: lightgray;
  font-size: 12px;
  line-height: 18px;
`;
export const ContentsWrapper = styled.div``;
export const FooterBorder = styled.div`
  border: 1px solid #bdbdbd;
  width: 1200px;
  margin-left: 100px;
  margin-top: 20px;
`;
