import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <hr className="border-1 border-black" />
      <div
        className="flex justify-center w-full h-64 mt-1 m-auto bg-mainColor pt-5
        xl:container xl:space-x-16
        lg:container lg:space-x-14
        md:container md:space-x-8
        "
      >
        <h1
          className="font-bold mt-11
         xl:text-4xl xl:ml-11
         lg:text-3xl
         md:pt-7 md:text-2xl "
        >
          Аквадекор
        </h1>
        <div
          className="grid grid-rows-7 grid-flow-col gap-1
        xl:w-[200px]"
        >
          <h3 className="m-auto pt-5 font-semibold">Бассейны</h3>
          <hr className="border-1 border-black m-auto w-[200px]" />
          <Link href="/servicies/overflowPools" className="hover:underline">
            Перелевные
          </Link>
          <Link href="/servicies/skimmerPools" className="hover:underline">
            Скиммерные
          </Link>
          <Link href="/servicies/childPools" className="hover:underline">
            Детские
          </Link>
          <hr className="border-1 border-black m-auto w-[200px]" />
          <Link href="/equipments" className="hover:underline">
            Оборудование
          </Link>
        </div>
        <div
          className="grid grid-rows-7 grid-flow-col gap-1 
         xl:w-[250px]"
        >
          <h3 className="m-auto pt-5 font-semibold">Изготовление</h3>
          <hr className="border-1 border-black m-auto w-[250px]" />
          <a href="" className="hover:underline">
            Каркасов для бассейна
          </a>
          <a href="" className="hover:underline">
            Чаш из полипропилена
          </a>
          <a href="" className="hover:underline">
            Ёмкостей из полипропилена
          </a>
          <a href="" className="hover:underline">
            Куплей
          </a>
        </div>
        <div
          className="grid grid-rows-7 grid-flow-col gap-1 
        xl:w-[200px]"
        >
          <h3 className="m-auto pt-5 font-semibold">Другое</h3>
          <hr className="border-1 border-black m-auto w-[200px]" />
          <Link href="/contacts" className="hover:underline">
            Контакты
          </Link>
          <Link href="/about" className="hover:underline">
            Про нас
          </Link>
          <Link className="hover:underline" href="/ourworks">
            Наши работы
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
