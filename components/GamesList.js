import Image from "../components/Image";
import useSWR from "swr";
import { EXCLUED_GAMES } from "../lib/constants";

export default function GamesList() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://uptapapi.uptap.com/h5Game/?type=GameList&platform=uptapgame0120&token=dXB0YXBnYW1l572R56uZ55So`,
    fetcher
  );

  if (error)
    return (
      <div className="p-4 text-center">
        Failed to load, please refresh the page to try again.
      </div>
    );
  if (!data) return <div className="p-4 text-center">Loading...</div>;

  let games = data.gamelist;

  games = games.filter((game) => !EXCLUED_GAMES.includes(game.name));
  games.map((i) =>
    i.name === "LittelBoxer" ? (i.name = "LittleBoxer") : null
  ); // 修复游戏名称错误
  games.sort((a, b) => (new Date(a.time) < new Date(b.time) ? 1 : -1));

  return (
    <ul className="container mx-auto grid grid-cols-3 gap-1 p-1 scrollbar-hide hover:overflow-y-scroll md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
      {games.map((game) => (
        <li key={game.id} className="">
          <Image
            src={`https://cdn.iwantalipstick.com/gameicon2/webp/${
              game.name == "SharkisComing" ? `SharkIsComing` : game.name
            }.webp`}
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
