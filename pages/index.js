import Head from "next/head";
import Image from "../components/Image";
import GamesList from "../components/GamesList";

export default function Home({ data }) {
  //
  return (
    <div id="Home">
      <Head>
        <title>FUTURE FUN</title>
        <meta
          name="description"
          content="Home to some of the most addictive Hyper Casual games on the market."
        />
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width, height=device-height"
        />
        <link
          rel="icon"
          href="./images/brand/favicon.svg"
          sizes="any"
          type="image/png"
        />
      </Head>
      <div className="relative z-0 overflow-hidden md:before:absolute md:before:left-1/2 md:before:-bottom-0 md:before:-z-20 md:before:h-16 md:before:w-full md:before:bg-white">
        <div
          id="Welcome"
          className="container relative mx-auto bg-white p-8 text-gray-800 before:absolute before:-left-1/2 before:top-0 before:-z-10 before:h-full before:translate-x-1/2 before:bg-white md:bg-transparent md:before:w-full md:after:absolute md:after:-left-1/2 md:after:-bottom-32 md:after:-z-20 md:after:h-[130%] md:after:w-full md:after:translate-x-1/2 md:after:-skew-x-[45deg] md:after:bg-black/10 xl:px-44 xl:text-2xl xl:before:-skew-x-[45deg]"
        >
          <h1>Welcome to FUTURE FUN</h1>
          <div className="relative mt-3 mb-6">
            <Image
              src={`/images/brand/logo.svg`}
              width={306}
              height={60}
              alt={`FUTURE FUN`}
            />
          </div>
          <p className="font-bold text-[#c01733]">
            Home to some of the most addictive Hyper Casual games on the market.
          </p>
          <p>
            FUTURE FUN is passionate about creating the best hyper causal games
            for people to enjoy, no matter who they are.
          </p>
          <p>{`Once you start to Tap, you aren't gonna want to stop.`}</p>
        </div>
      </div>
      <h2
        name="games"
        className="relative z-0 overflow-hidden md:after:absolute md:after:-right-full md:after:top-0 md:after:-z-0 md:after:h-[110%] md:after:w-full md:after:-translate-x-[25rem] md:after:-skew-x-[45deg] md:after:bg-black/20"
      >
        Our Games
      </h2>
      <div className="overflow-hidden bg-white">
        <GamesList />
      </div>
      <h2
        name="contact"
        className="relative z-0 overflow-hidden md:before:absolute md:before:-left-full md:before:top-0 md:before:-z-0 md:before:h-full md:before:w-full md:before:translate-x-44 md:before:skew-x-[45deg] md:before:bg-black/20 md:after:absolute md:after:-right-full md:after:top-0 md:after:-z-0 md:after:h-[150%] md:after:w-full md:after:-translate-x-48 md:after:skew-x-[45deg] md:after:bg-black/10"
      >
        Contact Us
      </h2>
      <div className="relative z-0 bg-white md:bg-transparent md:before:absolute md:before:-left-1/2 md:before:top-0 md:before:-z-10 md:before:h-full md:before:w-full md:before:translate-x-1/2 md:before:bg-white lg:before:skew-x-[45deg] lg:after:absolute lg:after:-left-20 lg:after:top-0 lg:after:-z-0 lg:after:h-full lg:after:w-16 lg:after:translate-x-20 lg:after:skew-x-[45deg] lg:after:bg-black/10">
        <div id="Contact" className="container mx-auto">
          <form className="md:mx-auto md:w-3/5" action="">
            <div className="row">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" />
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" />
            </div>
            <div className="row">
              <label htmlFor="messenge">Messenge</label>
              <input className="h-20" id="messenge" type="text" />
            </div>
            <div className="row">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
