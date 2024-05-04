import Link from "next/link";

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
        <h1
          className="font-bold 
         xl:text-3xl xl:ml-11
         lg:text-2xl
         mt-11 md:pt-7 md:text-base "
        >
          Аквадекор
        </h1>
        <div className="grid grid-rows-4 grid-flow-col gap-1 h-[200px] w-[200px]">
          <Link href="/servicies/overflowPools" className="hover:underline">
            Бассейны перелевные
          </Link>
          <Link href="/servicies/skimmerPools" className="hover:underline">
            Бассейны скиммерные
          </Link>
          <Link href="/servicies/childPools" className="hover:underline">
            Бассейны детские
          </Link>
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
          <Link href="/contacts" className="hover:underline">
            Контакты
          </Link>
          <Link href="/about" className="hover:underline">
            Про нас
          </Link>
          <Link className="hover:underline" href="/ourworks">
            Наши работы
          </Link>
          <Link href="/equipments" className="hover:underline">
            Оборудование
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
