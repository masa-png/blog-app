export default function Header() {
  return (
    <>
      <header className="bg-[#333] text-white font-bold p-6 flex justify-between items-center shadow-lg">
        <a className="text-base" href="/">
          Blog
        </a>
        <a href="/contact" className="text-base">
          お問い合わせ
        </a>
      </header>
    </>
  );
}
