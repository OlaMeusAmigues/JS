import data from "../../artigos.json";

function Home() {
  console.log(data);
  return (
    <>
      <input
        type="text"
        name="searchPosts"
        id="searchPosts"
        placeholder="Busque aqui"
      />
      <div className="grid grid-cols-3 gap-8 mx-auto my-0 w-4/5 border-spacing-4 border-red-700">
        {data.map((artigo, index) => (
          <div key={index}>
            <h1 className="text-center">{artigo.title}</h1>
            {artigo.image ? <img src={artigo.image} className="w-70 justify-center items-center"/>:
            "Imagem não encontrada"}
            {/* <img src={artigo.image} className="w-60" /> */}
            <div>
              {artigo.tags.map((tag) => (
                <span key={tag} className="text-center">{tag}</span>
              ))}
            </div>
            <div className="">
              {artigo.text.map((text) => (
                <p key={text} className="text-justify">{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Home;
