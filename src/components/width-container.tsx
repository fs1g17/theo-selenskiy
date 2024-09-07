export default function WidthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] md:w-[70%] lg:w-[60%]">{children}</div>
    </div>
  );
}
