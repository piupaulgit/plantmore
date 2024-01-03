import Image from "next/image";
import React, { useEffect } from "react";

interface IImageHelperProps {
  imageAlt: string;
  imageData: any;
}

const ImageHelper = (props: IImageHelperProps) => {
  const base64Image = Buffer.from(props.imageData.data.data).toString("base64");
  const imageUrl = `data:${props.imageData.contentType};base64,${base64Image}`;

  return <img src={imageUrl} alt={props.imageAlt} />;
};

export default ImageHelper;