import React from "react";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  socialId: string;
}

const Member: React.FC<Props> = ({ id, name, socialId }) => {
  return (
   
   <div className="mt-10 flex flex-col justify-center items-center">
      <Image
        src={`./assets/${id}.svg`}
        width={128}
        height={114}
        alt={name}
      />
      <div className="mt-2 text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">{socialId}</div>
    </div>
  );
};

export default Member;
