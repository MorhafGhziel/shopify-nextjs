import React from "react";
import GuaranteeImg from "@/public/GuaranteeImg.svg";
import Image from "next/image";

const Guarantee = () => {
  return (
    <section className="py-12 md:px-20">
      <div className="bg-[#FBFCFB] py-14 md:px-20 px-4 flex gap-12 justify-center flex-wrap md:flex-none">
        <div className="flex-shrink-0">
          <Image
            src={GuaranteeImg}
            alt="Guarante Img"
            className="w-[200px] h-[200px] md:h-[292px] md:w-[292px]"
          />
        </div>
        <div className="md:mt-6">
          <h2 className="md:text-5xl text-5xl font-light text-[#3F3631] md:text-left text-center ">
            30 Day Money Back Guarantee
          </h2>
          <p className=" font-light text-[#3F3631] text-xl md:text-2xl tracking-wider md:max-w-[790px] mt-8 leading-8 ">
            At Firebee we believe in building quality products that actually
            work. Firebee and its partners have invested over $85 million in
            research and development to create the highest quality wearable for
            customers to enjoy. If for any reason if you are not satisfied with
            your Firebee headband we will happily refund your purchase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
