import BoardMainUI from "./BoardMain.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardMain.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
// import _ from "lodash";

export default function BoardMain() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: count } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { startPage: 1 },
  });
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(Number(count?.fetchBoardsCount) / 10);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);
  const [nextActive, setNextActive] = useState(true);
  const [prevActive, setPrevActive] = useState(false);
  const [search, setSearch] = useState();
  // const [keyword, setKeyword] = useState("");

  const onClickregister = () => {
    router.push("/boards/new");
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/detail/${(event.target as Element).id}`);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number((event.target as Element).id) });
  };

  const onClickSearch = () => {
    refetch({ search: search });
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setSearch((event.target as Element).value);
  };
  // const getDebounce = _.debounce((data) => {
  //   refetch({ search: data });
  //   setKeyword(data);
  // }, 1000);

  function onClickNextPage() {
    if (startPage + 10 > lastPage) {
      setNextButton(true);
      setNextActive(false);
      setPrevActive(true);
      setPrevButton(false);
    } else if (startPage + 10 < lastPage) {
      setStartPage((prev) => prev + 10);
      setPrevButton(false);
      setPrevActive(true);
      setNextActive(true);
    } else {
      setNextActive(false);
      setNextButton(true);
    }
  }
  function onClickPrevPage() {
    if (startPage < 10) {
      setPrevButton(true);
      setPrevActive(false);
      setNextActive(true);
      setNextButton(false);
    } else if (startPage < lastPage) {
      setStartPage((prev) => prev - 10);
      setNextButton(false);
      setPrevActive(true);
      setNextActive(true);
    }
  }

  return (
    <BoardMainUI
      // keyword={keyword}
      nextActive={nextActive}
      prevActive={prevActive}
      data={data}
      startPage={startPage}
      lastPage={lastPage}
      prevButton={prevButton}
      nextButton={nextButton}
      onClickSearch={onClickSearch}
      onChangeSearch={onChangeSearch}
      refetch={refetch}
      onClickregister={onClickregister}
      onClickMoveDetail={onClickMoveDetail}
      onClickPage={onClickPage}
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
    />
  );
}
