import React, { useEffect, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import useImage from "use-image";

import { Html } from "react-konva-utils";

import useStore from "../store";
import { ModalBody } from "react-bootstrap";

function BaseImage({ imageSource }) { 
  const [image, setImage] = useImage(`image-${imageSource}.jpg`, "photo");
  const setImageSize = useStore((state) => state.setImageSize);
  const setScale = useStore((state) => state.setScale);
  const setSize = useStore((state) => state.setSize);
  const width = useStore((state) => state.width);
  const height = useStore((state) => state.height);

  const { brightness } = useStore();

  React.useEffect(() => {
    if (!image) {
      return;
    }
    const scale = Math.min(width / image.width, height / image.height);
    setScale(scale);
    setImageSize({ width: image.width, height: image.height });

    const ratio = image.width / image.height;
    setSize({
      width: width,
      height: width / ratio,
    });
  }, [image, width, height, setScale, setImageSize, setSize]);

  const layerRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = layerRef.current.getCanvas()._canvas;
    canvas.style.filter = `brightness(${(brightness + 1) * 100}%)`;
  }, [brightness]);

  return (
    <Layer ref={layerRef}>
      <Image image={image} />
    </Layer>
  );
}

export default BaseImage;
