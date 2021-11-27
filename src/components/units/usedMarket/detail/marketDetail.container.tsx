import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MarketDetailUI from "./marketDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./marketDetail.queries";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
};
const MarketDetail = () => {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
    skip: !router.query.useditemId,
  });
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const onClickToggle = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.useditemId },
      });

      refetch();
    } catch (err: any) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.useditemId,
        },
      });
      Modal.success({
        content: "삭제가 완료되었습니다.",
        onOk() {
          router.push("/usedMarket");
        },
      });
    } catch (err: any) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onClickBuying = async () => {
    if (localStorage.getItem("refreshToken")) {
      try {
        await createPointTransactionOfBuyingAndSelling({
          variables: {
            useritemId: router.query.useditemId,
          },
        });
        Modal.success({
          content: "구매가 완료되었습니다.",
          onOk() {
            router.push("/usedMarket");
          },
        });
      } catch (err: any) {
        Modal.error({
          content: err.message,
        });
      }
    } else {
      Modal.confirm({
        content: "로그인이 필요합니다.",
        onOk() {
          router.push("/boards/login");
        },
      });
    }
  };
  const onClickMoveToLogin = () => {
    Modal.confirm({
      content: "로그인이 필요합니다.",
      onOk() {
        router.push("/boards/login");
      },
    });
  };
  const onClickMove = () => {
    router.push("/usedMarket");
  };
  const onClickEdit = () => {
    router.push(`/usedMarket/detail/${router.query.useditemId}/edit`);
  };
  useEffect(() => {
    if (!data) return;
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f7c32ed029b0a9345341d56c3631807f&libraries=services,clusterer,drawing&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat,
            data?.fetchUseditem.useditemAddress?.lng
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다

              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              // // 인포윈도우로 장소에 대한 설명을 표시합니다
              // const infowindow = new window.kakao.maps.InfoWindow({
              //   // content: `${addressDetail}`,
              // });
              // infowindow.open(map, marker);
              marker.setMap(map);
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data]);
  return (
    <>
      <MarketDetailUI
        data={data}
        onClickMoveToLogin={onClickMoveToLogin}
        onClickBuying={onClickBuying}
        onClickMove={onClickMove}
        onClickEdit={onClickEdit}
        onClickToggle={onClickToggle}
        onClickDelete={onClickDelete}
      />
    </>
  );
};

export default MarketDetail;
