type PageStyle = {
  pageStyle: string;
  pageHr: string;
  pageH1: string;
  pageDescription: string;
};

const pageStyle: PageStyle = {
  pageStyle:
    "block w-full mt-1 m-auto xl:w-[1200px] lg:container mb-11 sm:w-full",
  pageHr:
    "border-1 border-black m-auto xl:w-[1200px] lg:container md:container",
  pageH1:
    "text-animation text-center mt-5 text-2xl xl:mt-[60px] xl:text-4xl lg:text-3xl lg:mt-4 lg:mb-10 md:text-3xl md:mt-4 md:mb-16",
  pageDescription:
    "relative element-animation m-auto mt-5 \
    w-[340px] h-[220px]\
    xl:w-[900px] xl:h-[150px] xl:text-xl\
    lg:w-[800px] lg:h-[150px] lg:text-lg\
    md:w-[650px] md:h-[120px] md:text-md",
};

export default pageStyle;
