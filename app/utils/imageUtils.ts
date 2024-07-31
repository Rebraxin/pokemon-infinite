export const getImageUrl = (pokemonName: string) => {
  const baseUrl = "https://img.pokemondb.net/sprites/home/normal/2x/";
  const extension = ".jpg";

  return `${baseUrl}${pokemonName}${extension}`;
};
