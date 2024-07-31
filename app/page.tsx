import Image from "next/image";
import Card from "./components/Card/Card";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import PaginationControls from "./components/PaginationControls/PaginationControls";
import InfoMessage from "./components/InfoMessage/InfoMessage";

export interface PokemonProps {
  name: string;
  url: string;
}

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log("🚀 ~ searchParams:", searchParams);
  const page = parseInt(searchParams["page"] as string, 10) || 1;
  console.log("🚀 ~ page:", page);

  const getPokemons = async () => {
    const res = await fetch(
      `http://localhost:3000/api/pokemon?page=${page - 1}&limit=20`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch pokemons");
    }

    return res.json();
  };

  const data = await getPokemons();
  console.log("🚀 ~ data:", data);
  const { count } = data;
  const pokemons = data.results;

  if (!pokemons.length) {
    return <ErrorMessage message="There was an error fetching the pokemons" />;
  }

  return (
    <div className="pt-10 pb-10">
      <InfoMessage count={count} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {pokemons?.map((pokemon: PokemonProps) => (
          <Card key={pokemon.name} {...pokemon} />
        ))}
      </ul>
      <PaginationControls />
    </div>
  );
};

export default Home;
