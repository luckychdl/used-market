import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./marketWrite.queries";
import MarketWriteUI from "./marketWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import withAuth from "../../../commons/hocs/withAuth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaWrite } from "../../../../commons/libraries/yup.validation";
import { FETCH_USED_ITEM } from "../detail/marketDetail.queries";
import { useEffect, useState } from "react";
const MarketWrite = (props: any) => {
  const [files, setFiles] = useState<(File | null)[]>([null, null, null, null]);
  // const [fileUrl, setFileUrl] = useState([]);
  const [address, setAddress] = useState(0);
  const [defaultAddress, setDefaultAddress] = useState("");
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [addressDetail, setAddressDetail] = useState(0);

  const { register, handleSubmit, setValue, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaWrite),
  });
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  useEffect(() => {
    if (!data) return;
    setFiles(data?.fetchUseditem?.images);
    setDefaultAddress(data?.fetchUseditem.useditemAddress.address);
  }, [data]);
  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }
  const onClickItem = async (data: any) => {
    try {
      const uploadFiles = files
        .filter((data) => data)
        .map((data) => uploadFile({ variables: { file: data } }));
      const results = await Promise.all(uploadFiles);
      const images = results.map((data) => data.data?.uploadFile.url);

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: images,
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      Modal.success({
        content: "상품이 등록되었습니다!",
        onOk() {
          router.push(`/usedMarket/detail/${result.data?.createUseditem._id}`);
        },
      });
    } catch (err: any) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onClickUpdate = async (data: any) => {
    const uploadFiles = await Promise.all(
      files.map((data) =>
        typeof data !== "string"
          ? uploadFile({ variables: { file: data } })
          : data
      )
    );
    const images = uploadFiles
      .filter((data) => data)
      .map((el) => (el.data?.uploadFile.url ? el.data?.uploadFile.url : el));
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: images,
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
              lat: lat,
              lng: lng,
            },
          },
          useditemId: router.query.useditemId,
        },
      });
      console.log(data.name);
      Modal.success({
        content: "수정이 완료되었습니다.",
        onOk() {
          router.push(`/usedMarket/detail/${result.data?.updateUseditem._id}`);
        },
      });
    } catch (err: any) {
      Modal.error({
        content: err.message,
      });
    }
  };

  // const onChangeFileUrl = (imgUrl: string, index: number) => {
  //   const newFileUrl = [...imgUrl];
  //   newFileUrl[index] = imgUrl;
  //   setFileUrl(newFileUrl);
  // };
  const onChangeValue = (val: any) => {
    setValue("contents", val);
  };

  return (
    <>
      <MarketWriteUI
        isActive={formState.isValid}
        errors={formState.errors}
        data={data}
        files={files}
        defaultAddress={defaultAddress}
        isEditWrite={props.isEditWrite}
        onClickUpdate={onClickUpdate}
        setLng={setLng}
        setLat={setLat}
        setAddress={setAddress}
        setAddressDetail={setAddressDetail}
        onChangeValue={onChangeValue}
        register={register}
        handleSubmit={handleSubmit}
        onChangeFiles={onChangeFiles}
        // onChangeFileUrl={onChangeFileUrl}
        onClickItem={onClickItem}
      />
    </>
  );
};
export default withAuth(MarketWrite);
