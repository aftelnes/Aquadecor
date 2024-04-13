const Footer = () => {
  return (
    <div>
      <hr className="border-1 border-black" />
      <div
        className="flex justify-center w-full h-64 mt-1 m-auto bg-mainColor 
      pt-5 sm:w-full md:container lg:container xl:container
      space-x-20
      "
      >
        <h1 className="font-bold text-lg mt-11 md:pt-7 md:text-base xl:text-3xl xl:ml-11">
          Аквадекор
        </h1>
        <div className="grid grid-rows-4 grid-flow-col gap-1 h-[200px] w-[180px]">
          <a href="" className="hover:underline">
            Бассейны из бетона
          </a>
          <a href="" className="hover:underline">
            Бассейны из плёнки
          </a>
          <a href="" className="hover:underline">
            Скиммерные бассейны
          </a>
          <a href="" className="hover:underline">
            Перелевные бассейны
          </a>
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-1 h-[200px] w-[180px]">
          <a href="" className="hover:underline">
            Отлив каркаса бассейна
          </a>
          <a href="" className="hover:underline">
            Изготовление чаш
          </a>
          <a href="" className="hover:underline">
            Изготовление куплей
          </a>
          <a href="" className="hover:underline">
            Изготовление ёмкостей из полипропилена
          </a>
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-1 h-[200px] w-[180px]">
          <a href="" className="hover:underline">
            Контакты
          </a>
          <a href="" className="hover:underline">
            Про нас
          </a>
          <a href="" className="hover:underline">
            Наши работы
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
