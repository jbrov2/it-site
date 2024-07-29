export default function NavBar() {
  return (
    <>
      <header className="bg-[#EF626C] flex p-[40px] ">
        <div className="container mx-auto flex justify-between items-center h-full">
          <h1>FixIT</h1>
          <nav>
            <ul className="flex flex-row">
              <li className="mr-4">
                <a href="">About</a>
              </li>
              <li className="mr-4">
                <a href="">Contact</a>
              </li>
              <li className="mr-4">
                <a href="">Reviews</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
