import React from "react";
import GuaranteeImg from "@/public/GuaranteeImg.svg";
import Image from "next/image";

const Guarantee = () => {
  return (
    <section>
      <div>
        <div>
          <Image src={GuaranteeImg} alt="Guarante Img" />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
