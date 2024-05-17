import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <>
      <header className="bg-black flex text-white justify-between items-center w">
        <img src="https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg"  className="w-36"alt="" />
        <span>Logo</span>
        <h1 className="whit">Bem-vindo ao Netflix</h1>

        <NavBar />
      </header>
    </>
  );
}
export default Header;
