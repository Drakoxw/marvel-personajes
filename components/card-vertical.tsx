export default function CardVertical({
  children,
  addClass = "",
}: {
  children: React.ReactNode;
  addClass?: string;
}) {
  return (
    <section
      className={`min-w-[120px] bg-gray-900 border-amber-50 border rounded h-36 flex justify-center items-center ${addClass}`}
    >
      {children}
    </section>
  );
}
