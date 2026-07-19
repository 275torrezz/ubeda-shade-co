type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#2E7D32]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#111111] sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4f4f4f]">{description}</p>
    </div>
  );
}
