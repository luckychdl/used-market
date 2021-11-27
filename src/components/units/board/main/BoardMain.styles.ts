import styled from "@emotion/styled";

export const Main = styled.div`
  width: 1200px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const Wrapper = styled.div`
  border-top: 2px solid #424242;
  border-bottom: 2px solid #424242;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const Row = styled.div`
  height: 40px;
  line-height: 40px;
  display: flex;
`;
export const ListColumn = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 171px;
  height: 52px;
  background-color: #512771;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;
// export const EditOutlined = styled.img`
//   width: 18px;
//   height: 18px;
//   margin-right: 5px;
//   color: white;
// `;
export const Button = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: white;
`;
export const Column = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  border-top: 1px solid #e0e0e0;
  /* cursor: pointer; */
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
export const Title = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  border-top: 1px solid #e0e0e0;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767) {
    overflow: hidden;
    font-size: 14px;
  }
`;
export const Page = styled.button`
  margin: 0px 10px;
  cursor: pointer;
  background-color: white;
  border: none;
  :active {
    position: relative;
    top: 4px;
    border-radius: 10px;
  }
  :hover {
    color: #512771;
  }
  @media (max-width: 767px) {
    margin: 0;
  }
`;
export const Next = styled.button`
  margin: 0px 10px;
  cursor: pointer;
  background-color: white;
  border: none;
  text-align: center;
  color: ${(props: { nextActive: boolean }) =>
    props.nextActive ? "black" : "#e6e6e6"};
  :active {
    position: relative;
    top: 4px;
  }
  :hover {
    color: ${(props: { nextActive: boolean }) =>
      props.nextActive ? "#512771" : "none"};
  }
`;
export const Prev = styled.button`
  margin: 0px 10px;
  cursor: pointer;
  background-color: white;
  border: none;
  text-align: center;
  color: ${(props: { prevActive: boolean }) =>
    props.prevActive ? "black" : "#e6e6e6"};
  :active {
    position: relative;
    top: 4px;
  }
  :hover {
    color: ${(props: { prevActive: boolean }) =>
      props.prevActive ? "#512771" : "none"};
  }
`;
export const PageWrapper = styled.div`
  display: flex;
  width: 1200px;
  justify-content: center;
  margin: 30px;
  @media (max-width: 767px) {
    width: 330px;
    margin: 10px;
  }
`;
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Search = styled.input`
  width: 600px;
  background-image: url("/FreeBoard/search.png");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 10px;
  padding-left: 40px;
  border: none;
  border-bottom: 1px solid #616161;
  outline-color: #512771;
  @media (max-width: 767px) {
    width: 200px;
  }
`;
export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: #512771;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    width: 80px;
    height: 45px;
  }
`;
// export const Word = styled.span`
//   color: ${(props) => (props.aaa ? "red" : "black")};
// `;
