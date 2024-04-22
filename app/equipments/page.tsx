"use client";
import { useEffect } from "react";
import Link from "next/link";

import pic from "../../public/images/Pages/Pumps/pump3.jpeg";

import sectionStyle from "@/styles/sectionStyle/sectionStyle";

import InfoBlockInPage from "@/components/InfoBlock/InfoBlockInPage";
import appearing from "@/tools/appearing";

const Equipments = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={sectionStyle.sectionStyle}>
      <hr className={sectionStyle.sectionHr} />
      <h1 className={sectionStyle.sectionH1}>Оборудование</h1>

      <Link href="/equipments/pumps">
        <InfoBlockInPage img={pic.src} header="Насосы" text="Насосы" />
      </Link>
      <InfoBlockInPage img={pic.src} header="Станции" text="Станции" />
    </div>
  );
};
export default Equipments;
