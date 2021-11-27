import {
  MainWrapper,
  EmailWrapper,
  SignUpEmail,
  MainTitle,
  SubTitle,
  EmailAdress,
  TermsWrapper,
  TotalTerms,
  SubTerms,
  TermsSubWrapper,
  TermsText,
  TermsSubText,
  SignUpButton,
  SubText,
  FooterWrapper,
  MoveLogIn,
} from "./signup.styles";
import { Select } from "antd";
import Input02 from "../inputs/input02.signUp";
import Title01 from "../titles/title01.signin";
const OPTION_VALUES = [
  "naver.com", //
  "daum.net",
  "gmail.com",
  "nate.com",
];

export default function SignUpPageUI(props: any) {
  const { Option } = Select;

  return (
    <MainWrapper>
      <MainTitle>회원가입</MainTitle>
      <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
        <Title01 divName={"이메일"}></Title01>
        <EmailWrapper>
          <SignUpEmail
            placeholder="이메일"
            type="text"
            onChange={props.onChangeEmail}
          />
          <EmailAdress> @ </EmailAdress>
          <Select
            showSearch
            onChange={props.onChangeSelectEmail}
            style={{
              width: 215,
              height: 50,
              borderRadius: 4,
              outlineColor: "#35C5F0",
              border: "1px solid #bdbdbd",
              marginBottom: 15,
              fontSize: 14,
              paddingTop: 7,
              color: "#757575",
            }}
            bordered={false}
            placeholder="도메인을 선택하세요."
            optionFilterProp="children"
            filterOption={(input, option) =>
              // @ts-ignore
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {OPTION_VALUES.map((data, index) => (
              <Option key={index + 1} value={data}>
                {data}
              </Option>
            ))}
          </Select>
          {/* <SigninEmail type="text" /> */}
        </EmailWrapper>
        <Title01 divName={"비밀번호"}></Title01>
        <SubTitle>
          영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </SubTitle>
        <Input02
          inputName={"비밀번호"}
          type="password"
          register={{ ...props.register("password") }}
          errorMessage={props.errors.password?.message}
        />
        <Title01 divName={"비밀번호 확인"}> </Title01>
        <Input02
          inputName={"비밀번호 확인"}
          type="password"
          register={{ ...props.register("confirmPassword") }}
          errorMessage={props.errors.confirmPassword?.message}
        />
        <Title01 divName={"닉네임"}></Title01>
        <SubTitle>
          다른 유저와 겹치지 않는 별명을 입력해주세요.( 2~15자 )
        </SubTitle>
        <Input02
          inputName={"별명 (2 ~ 15자)"}
          type="text"
          register={{ ...props.register("name") }}
          errorMessage={props.errors.name?.message}
        />
        <Title01 divName={"약관동의"}></Title01>
        <TermsWrapper>
          <TermsSubWrapper>
            <TotalTerms
              type="checkbox"
              onClick={props.onClickCheck}
              checked={props.check}
            />
            <TermsText>전체동의</TermsText>
          </TermsSubWrapper>
          <TermsSubWrapper>
            <SubTerms type="checkbox" checked={props.check} />
            <TermsSubText>만 14세 이상입니다.</TermsSubText>
            <SubText>(필수)</SubText>
          </TermsSubWrapper>
          <TermsSubWrapper>
            <SubTerms type="checkbox" checked={props.check} />
            <TermsSubText>이용약관</TermsSubText>
            <SubText>(필수)</SubText>
          </TermsSubWrapper>
          <TermsSubWrapper>
            <SubTerms type="checkbox" checked={props.check} />
            <TermsSubText>개인정보수집 및 이용동의</TermsSubText>
            <SubText>(필수)</SubText>
          </TermsSubWrapper>
          <TermsSubWrapper>
            <SubTerms type="checkbox" checked={props.check} />
            <TermsSubText>이벤트, 프로모션 알림 메일 및 SMS 수신</TermsSubText>
          </TermsSubWrapper>
        </TermsWrapper>
        <SignUpButton type="submit">회원가입하기</SignUpButton>
      </form>
      <FooterWrapper>
        <TermsSubText>이미 아이디가 있으신가요?</TermsSubText>
        <MoveLogIn onClick={props.onClickMoveToLogin}>로그인</MoveLogIn>
      </FooterWrapper>
    </MainWrapper>
  );
}
