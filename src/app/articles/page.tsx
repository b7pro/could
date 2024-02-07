import {Article} from "@/utils/type"

const ArticlesPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result: Article[] = await response.json();
  if(!response.ok){
    throw new Error("Fialed to fetch articales")
  }

  return (
    <>
      <section className="container m-auto px-5 ">
        {result.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default ArticlesPage;
