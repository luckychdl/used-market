import {
  MainWrapper,
  Title,
  MenuWrapper,
  LocationWrapper,
  RowWrapper,
  UploadWrapper,
  Error,
} from "./marketWrite.styles";
import Upload01 from "../../../commons/uploads/Upload01.container";
import Title02 from "../../../commons/titles/title02.marketWrite";
import Input03 from "../../../commons/inputs/input03.marketWrite";
import Button01 from "../../../commons/buttons/button01";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import KakaoMap from "../../../commons/kakaoMap/kakaoMap.container";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const MarketWriteUI = (props: any) => {
  return (
    <form
      onSubmit={props.handleSubmit(
        !props.isEditWrite ? props.onClickItem : props.onClickUpdate
      )}
    >
      <MainWrapper>
        {props.isEditWrite ? (
          <Title>게시물 수정</Title>
        ) : (
          <Title>게시물 등록</Title>
        )}

        <MenuWrapper>
          <Title02 divName={"상품명"}></Title02>
          <Input03
            type="text"
            inputName={"상품명을 작성해주세요"}
            defaultValue={props.data?.fetchUseditem.name}
            register={{ ...props.register("name") }}
            errorMessage={props.errors.name?.message}
          />
        </MenuWrapper>
        <MenuWrapper>
          <Title02 divName={"한줄요약"}></Title02>
          <Input03
            type="text"
            inputName={"상품요약을 작성해주세요"}
            register={{ ...props.register("remarks") }}
            defaultValue={props.data?.fetchUseditem.remarks}
            errorMessage={props.errors.remarks?.message}
          />
        </MenuWrapper>
        <MenuWrapper>
          <Title02 divName={"상품 설명"}></Title02>
          <ReactQuill
            placeholder="상품을 설명해주세요"
            onChange={props.onChangeValue}
            style={{
              maxWidth: "100%",
              height: "330px",
              borderRadius: "10px",
              fontSize: "16px",
              marginBottom: "20px",
              paddingBottom: "30px",
              outlineColor: "#35c5f0",
              // ::placeholder {
              //   color: "#bdbdbd"
            }}
          />

          <Error style={{ paddingTop: "5px" }}>
            {props.errors.contents?.message}
          </Error>
        </MenuWrapper>
        <MenuWrapper>
          <Title02 divName={"판매 가격"}></Title02>
          <Input03
            type="text"
            inputName={"판매가격을 입력해주세요"}
            defaultValue={props.data?.fetchUseditem.price}
            register={{ ...props.register("price") }}
            errorMessage={props.errors.price?.message}
          />
        </MenuWrapper>
        <MenuWrapper>
          <Title02 divName={"태그 입력"}></Title02>
          <Input03
            type="text"
            inputName={"#태그 #태그 #태그"}
            register={{ ...props.register("tags") }}
            defaultValue={props.data?.fetchUseditem.tags}
            errorMessage={props.errors.tags?.message}
          />
        </MenuWrapper>
        <RowWrapper>
          <LocationWrapper>
            <KakaoMap
              setLng={props.setLng}
              setLat={props.setLat}
              setAddress={props.setAddress}
              setAddressDetail={props.setAddressDetail}
              isEditWrite={props.isEditWrite}
              defaultAddress={props.defaultAddress}
              data={props.data}
            />
            {/* <Title02 divName={"거래위치"}></Title02>
            <LocationMap></LocationMap> */}
            <Title02 divName={"사진 첨부"}></Title02>
            <UploadWrapper>
              {new Array(4).fill(1).map((url, index) => (
                <Upload01
                  key={`${url}_${index}`}
                  index={index}
                  newImages={props.data?.fetchUseditem.images[index]}
                  data={props.data}
                  onChangeFiles={props.onChangeFiles}
                />
              ))}
            </UploadWrapper>
          </LocationWrapper>
        </RowWrapper>

        <Button01
          buttonName={props.isEditWrite ? "수정하기" : "등록하기"}
          isActive={props.isActive}
        ></Button01>
      </MainWrapper>
    </form>
  );
};

export default MarketWriteUI;
