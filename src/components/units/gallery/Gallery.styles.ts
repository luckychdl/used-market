import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`;
export const Title = styled.div`
  font-size: 48px;
  padding: 30px;
  font-weight: 900;
`;
export const Resume = styled.button`
  width: 200px;
  height: 70px;
  margin: 0 20px 20px 20px;
  background-color: #512771;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  :active {
    position: relative;
    top: 2px;
  }
  :hover {
    background-color: #ffffff;
    color: #512771;
    border: 1px solid #512771;
  }
`;
export const ProjectBox = styled.img`
  border: 1px solid black;
  width: 300px;
  height: 300px;
`;
export const ProjectName = styled.div`
  font-size: 20px;
  padding: 10px;
`;
export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
  padding: 15px;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ButtonWrapper = styled.div``;
export const ShowDetail = styled.button`
  width: 142.5px;
  height: 50px;
  margin-right: 15px;
  font-size: 20px;
  background-color: #512771;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
  :hover {
    background-color: #ffffff;
    color: #512771;
    border: 1px solid #512771;
  }
`;
export const MoveToGit = styled.button`
  width: 142.5px;
  height: 50px;
  font-size: 20px;
  background-color: #512771;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
  :hover {
    background-color: #ffffff;
    color: #512771;
    border: 1px solid #512771;
  }
`;
