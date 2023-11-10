const SectionTitle = ({
  title,
  paragraph,
  styleTitle,
  styleParagraph,
  styleBorder,
  styleBody,
}) => {
  return (
    <div
      className={`items-center self-center flex max-w-3xl w-full mx-auto flex-col ${styleBody}`}
    >
      <div className="items-center self-stretch flex flex-col px-5">
        {title && (
          <h1
            className={`text-cyan-900 text-4xl font-semibold tracking-wider text-center leading-[3rem] ${styleTitle}`}
          >
            {title}
          </h1>
        )}

        {paragraph && (
          <p
            className={`text-cyan-900 text-center text-base leading-6 self-center w-full px-5 mt-2 ${styleParagraph}`}
          >
            {paragraph}
          </p>
        )}
      </div>{" "}
      <div
        className={`bg-orange-400 self-center flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px] ${styleBorder}`}
      />
    </div>
  );
};

export default SectionTitle;
