import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <hr className="border-1 border-black" />
      <div
        className="flex justify-center w-full h-64 mt-1 m-auto w-[200px] pt-5
        xl:container xl:space-x-16
        lg:container lg:space-x-14
        md:container md:space-x-8
        "
      >
        <div
          className="grid grid-cols-1 
        xl:grid-cols-4
        lg:grid-cols-4
        md:grid-cols-4"
        >
          <h1
            className="font-bold text-3xl m-auto
         xl:text-3xl
         lg:text-3xl
         md:text-3xl "
          >
            Аквадекор
          </h1>
          <div
            className="grid grid-rows-7 grid-flow-col gap-0.5
        xl:w-[200px]"
          >
            <h3 className="m-auto pt-2 font-semibold">Бассейны</h3>
            <hr className="border-1 border-black m-auto w-11/12" />
            <Link
              href="/servicies/overflowPools"
              className="pl-2 hover:underline"
            >
              Перелевные
            </Link>
            <Link
              href="/servicies/skimmerPools"
              className="pl-2 hover:underline"
            >
              Скиммерные
            </Link>
            <Link href="/servicies/childPools" className="pl-2 hover:underline">
              Детские
            </Link>
            <hr className="border-1 border-black m-auto w-11/12" />
            <Link href="/equipments" className="pl-2 hover:underline">
              Оборудование
            </Link>
          </div>
          <div
            className="grid grid-rows-7 grid-flow-col gap-0.5
        xl:w-[200px]"
          >
            <h3 className="m-auto pt-2 font-semibold">Изготовление</h3>
            <hr className="border-1 border-black m-auto w-11/12" />
            <Link
              href="/servicies/overflowPools"
              className="pl-2 hover:underline"
            >
              Каркасов для бассейна
            </Link>
            <Link
              href="/servicies/skimmerPools"
              className="pl-2 hover:underline"
            >
              Чаш из полипропилена
            </Link>
            <Link href="/servicies/childPools" className="pl-2 hover:underline">
              Ёмкостей из полипропилена
            </Link>
            <Link href="/equipments" className="pl-2 hover:underline">
              Купелей
            </Link>
          </div>
          <div
            className="grid grid-rows-7 grid-flow-col gap-0.5
        xl:w-[200px]"
          >
            <h3 className="m-auto pt-2 font-semibold">Другое</h3>
            <hr className="border-1 border-black m-auto w-11/12" />
            <Link
              href="/servicies/overflowPools"
              className="pl-2 hover:underline"
            >
              Контакты
            </Link>
            <Link
              href="/servicies/skimmerPools"
              className="pl-2 hover:underline"
            >
              Про нас
            </Link>
            <Link href="/servicies/childPools" className="pl-2 hover:underline">
              Наши работы
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
