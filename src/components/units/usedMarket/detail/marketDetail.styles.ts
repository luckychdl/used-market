import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  padding-bottom: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    width: 100%;
    box-shadow: none;
    margin: 0 0;
  }
`;
export const SubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 792px;
  margin-top: 100px;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  @media (max-width: 767px) {
    width: 90%;
    margin-top: 20px;
  }
`;
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
  }
`;
export const ProfileImg = styled.img`
  margin-right: 10px;
`;
export const SellerWrapper = styled.div``;
export const SellerName = styled.div``;
export const SellDate = styled.div``;
export const LocationWrapper = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Link = styled.img``;
export const Location = styled.img``;
export const MainNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 792px;
  margin-top: 20px;
  @media (max-width: 767px) {
    width: 90%;
    margin: 10px;
  }
`;
export const NameWrapper = styled.div`
  margin-bottom: 80px;
  @media (max-width: 767px) {
    width: 100px;
    margin: 10px;
  }
`;
export const Remarks = styled.div`
  /* width: 200px; */
  height: 27px;
  font-size: 18px;
  color: #bdbdbd;
  margin-bottom: 5px;
`;
export const Name = styled.div`
  width: 500px;
  height: 36px;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  color: #4f4f4f;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    margin: 10px;
  }
`;
export const Like = styled.img`
  margin-bottom: 5px;
`;
export const LikeScore = styled.img``;

export const Price = styled.div`
  width: 200px;
  height: 53px;
  font-weight: bold;
  font-size: 36px;
`;
export const Contents = styled.div`
  font-size: 18px;
  margin-bottom: 40px;
`;
export const Tags = styled.div`
  font-size: 16px;
  color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 40px;
`;
export const ContentsWrapper = styled.div`
  margin-top: 100px;
  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const MapBox = styled.div`
  width: 700px;
  max-width: 792px;
  height: 360px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
// export const Button = styled.button`
//   width: 170px;
//   height: 60px;
//   font-size: 18px;
//   font-weight: bold;
//   background-color: #35c5f0;
//   color: white;
//   border: none;
//   border-radius: 10px;
//   margin-top: 30px;
//   margin-right: 24px;
//   cursor: pointer;
//   :active {
//     position: relative;
//     top: 2px;
//   }
// `;
export const ImgWrapper = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 30px;
  }
`;
export const Picture = styled.img`
  margin-bottom: 100px;
  margin: auto;
`;
export const SliderUl = styled.ul`
  width: 600px;
  > li {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  width: 170px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #512771;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  /* margin-right: 24px; */
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
