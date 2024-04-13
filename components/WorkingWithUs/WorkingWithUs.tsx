"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import WorkingWithUsItem from "./WorkingWithUsItem/WorkingWithUsItem";

import quality_control from "../../public/images/WorkingWIthUs/quality_control.jpg";
import low_const from "../../public/images/WorkingWIthUs/low_cost.jpeg";
import calc from "../../public/images/WorkingWIthUs/calc.jpg";
import guarant from "../../public/images/WorkingWIthUs/guarant.jpg";

const WorkingWithUs = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="mb-11">
      <h1 className="text-animation mb-16">Работая с нами вы получите</h1>
      <div className="grid gap-2 grid-cols-2 grid-rows-2">
        <WorkingWithUsItem
          text="Мы рассчитаем за вас все расходы. А так же поможем выбрать лучший вариант"
          header={"Бесплатный расчёт"}
          img={calc.src}
        />
        <WorkingWithUsItem
          text="Наши специалисты бесплатно устранят любые несиправности в течении гарантийного срока ... "
          header={"Долгосрочную гарантию"}
          img={guarant.src}
        />
        <WorkingWithUsItem
          text="У вас будет возможность узнать всю необходиму инфаормцию от наших сотрудников в любой момент времени"
          header={"Контроль качества и услуг"}
          img={quality_control.src}
        />
        <WorkingWithUsItem
          text="...."
          header={"Низкую цена"}
          img={low_const.src}
        />
      </div>
    </div>
  );
};

export default WorkingWithUs;
