import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen pt-60 flex flex-col items-center gap-40 bg-secondary_bg">
      <h1 className="font-bold text-4xl">
        Bem vindo a Imersão Front-End 2a edição da Alura - Spotify
      </h1>

      <div className="flex flex-row gap-8">
        <Link
          href="/imersao"
          className="h-12 flex justify-center items-center bg-white text-inverse_text font-bold px-6 rounded-full hover:bg-inverse_bg hover:scale-105 transition-all"
        >
          Versão da imersão
        </Link>

        <Link
          href="/new"
          className="h-12 flex justify-center items-center bg-white text-inverse_text font-bold px-6 rounded-full hover:bg-inverse_bg hover:scale-105 transition-all"
        >
          Versão do novo layout
        </Link>
      </div>
    </div>
  );
}
