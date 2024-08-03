"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import WorkingWithUsItem from "./WorkingWithUsItem/WorkingWithUsItem";

import quality_control from "../../public/images/WorkingWIthUs/servicies-quality.png";
import low_const from "../../public/images/WorkingWIthUs/low-cost.png";
import calc from "../../public/images/WorkingWIthUs/free-calculating-3.png";
import guarant from "../../public/images/WorkingWIthUs/guaranties-2.png";
import comleting_task from "../../public/images/WorkingWIthUs/completing-task.png";
import technical_support from "../../public/images/WorkingWIthUs/technical-support.png";

const WorkingWithUs = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="element-animation h-auto container m-auto xl:w-[1200px] xl:mt-20 lg:mt-10 md:mt-8">
      <h1
        className="text-animation text-2xl w-[300px] m-auto mt-5 mb-5 
      xl:text-5xl xl:mb-16 xl:container
      lg:mb-12 lg:text-4xl lg:container
      md:text-3xl md:mb-10 md:container"
      >
        Работая с нами вы получите
      </h1>
      <div
        className="xl:grid xl:gap-2 xl:grid-cols-2 xl:grid-rows-1 
      lg:grid lg:gap-2 lg:grid-cols-2 lg:grid-rows-1 
      md:grid md:gap-2 md:grid-cols-2 md:grid-rows-1"
      >
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
      </div>
      <div
        className="xl:grid xl:gap-2 xl:grid-cols-2 xl:grid-rows-1 xl:mt-6
      lg:grid lg:gap-2 lg:grid-cols-2 lg:grid-rows-1 lg:mt-6
      md:grid md:gap-2 md:grid-cols-2 md:grid-rows-1 md:mt-6"
      >
        <WorkingWithUsItem
          text="Наши специалисты лично несут ответственность за выполненную работу"
          header={"Контроль качества и услуг"}
          img={quality_control.src}
        />
        <WorkingWithUsItem
          text="Соотношение цена/качество выше вреднего по рынку"
          header={"Доступную цену"}
          img={low_const.src}
        />
      </div>
      <div
        className="xl:grid xl:gap-2 xl:grid-cols-2 xl:grid-rows-1 xl:mt-6
      lg:grid lg:gap-2 lg:grid-cols-2 lg:grid-rows-1 lg:mt-6
      md:grid md:gap-2 md:grid-cols-2 md:grid-rows-1 md:mt-6"
      >
        <WorkingWithUsItem
          text="Все задачи выполняются в минимальные сроки с максимальной эффективностью"
          header={"Выполнение задач в кратчайший срок"}
          img={comleting_task.src}
        />
        <WorkingWithUsItem
          text="Наши специалисты ответят на все интересующие вопросы с 8:00 утра и до 18:00 вечера"
          header={"Техподдержку"}
          img={technical_support.src}
        />
      </div>
    </div>
  );
};

export default WorkingWithUs;
