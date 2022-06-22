import Image from "next/image";

const ImageFrame = ({
  name,
  box,
  outline,
  img,
  blurHash = "L8G]K=kP009E00jD_MSN00nPwGM{",
}) => {
  return (
    <div className="max-w-[320px] mx-auto relative  ">
      {" "}
      <Image
        alt={img}
        src={img}
        width={417}
        height={417}
        layout="responsive"
        placeholder="blur"
        blurDataURL={blurHash}
        className=" drop-shadow-md  "
      />{" "}
      {name && (
        <div className=" bg-white p-4  absolute drop-shadow-md -right-[15%] -bottom-[5%]  ">
          <p className=" font-medium text-3xl">{name}</p>
        </div>
      )}
      <div
        style={{
          backgroundColor: `${
            box == "blue" ? "rgb(23 162 218 / 0.1)" : "rgb(241 97 97 / 0.1)"
          }`,
        }}
        className=" absolute -z-10 w-[75%] h-[75%]  -left-[10%] -bottom-[10%] "
      ></div>
      <div
        style={{
          borderColor: `${
            outline == "blue" ? "rgb(23 162 218 / 0.1)" : "rgb(241 97 97 / 0.1)"
          }`,
        }}
        className=" absolute -z-10 w-[35%] h-[35%] -right-[8%] -top-[8%] border-8  "
      ></div>
    </div>
  );
};

export default ImageFrame;
