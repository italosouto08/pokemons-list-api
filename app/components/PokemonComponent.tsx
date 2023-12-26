import axios from "axios";
import { useEffect, useState } from "react";
import {
 List,
 ListItem,
 ListItemPrefix,
 Card,
} from "@material-tailwind/react";

export function PokemonComponent() {
 const [pokemon, setPokemon] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const responseApi = response.data.results;
        setPokemon(responseApi);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
 }, []);

 return (
  <div className="rounded-md flex flex-col justify-center items-center min-h-screen "> 
    <Card className="w-90 list-disc mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Pokémons</h2>
        {pokemon.map((poke: any, id: number) => (
          <List className="mt-2 text-black">
            <ListItem key={id} className="bg-gray-200 hover:bg-gray-300 rounded-md">
              <ListItemPrefix className="bg-red-600 container w-10 text-center rounded-md text-white mr-2">
                {id + 1}
              </ListItemPrefix>
              {poke.name}
            </ListItem>
          </List>
        ))}
    </Card>
  </div>
 );
};