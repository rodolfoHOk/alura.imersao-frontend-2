export function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#af2896] to-[#509bf5] mx-2 mb-2 px-4 py-2 flex flex-row justify-between items-center">
      <div className="flex flex-col py-1">
        <p className="font-bold text-sm text-white">
          Testar o Premium de graça
        </p>
        <p>
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito
        </p>
      </div>

      <div className="mr-2">
        <button className="h-12 bg-white text-inverse_text font-bold px-6 rounded-full hover:bg-inverse_bg hover:scale-105 transition-all">
          Inscreva-se grátis
        </button>
      </div>
    </div>
  );
}
