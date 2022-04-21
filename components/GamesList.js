import Image from "next/image";
import useSWR from "swr";
import { EXCLUED_GAMES } from "../lib/constants";

export default function GamesList() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://uptapapi.uptap.com/h5Game/?type=GameList&platform=uptap&token=dXB0YXBnYW1l572R56uZ55So`,
    fetcher
  );

  if (error) return <div className="p-4 text-center">Failed to load</div>;
  if (!data) return <div className="p-4 text-center">Loading...</div>;

  let games = data.gamelist;

  games = games.filter((game) => !EXCLUED_GAMES.includes(game.name));
  games.sort((a, b) => (a.time < b.time ? 1 : -1));

  return (
    <ul className="container mx-auto grid grid-cols-3 gap-1 p-1 scrollbar-hide hover:overflow-y-scroll md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
      {games.map((game) => (
        <li key={game.id} className="">
          <Image
            src={game.icon}
            width={100}
            height={100}
            alt={game.name}
            layout="responsive"
          />
        </li>
      ))}
    </ul>
  );
}
