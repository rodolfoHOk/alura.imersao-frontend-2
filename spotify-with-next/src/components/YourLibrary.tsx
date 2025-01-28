import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

export function YourLibrary() {
  return (
    <div className="h-full bg-secondary_bg rounded-lg flex flex-col justify-between p-2">
      <div className="flex flex-col gap-4">
        <div className="pl-4 pr-1 flex flex-row justify-between items-center">
          <button className="py-3 flex items-center text-secondary_text font-semibold hover:text-primary_text transition-colors">
            <FontAwesomeIcon icon={faBook} className="text-xl font-light" />
            <span className="ml-5">Sua Biblioteca</span>
          </button>

          <button className="mr-1 w-10 h-10 rounded-full text-secondary_text font-semibold text-sm hover:bg-tertiary_bg hover:text-primary_text transition-colors">
            <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
          </button>
        </div>

        <section className="mt-3 flex flex-col justify-between gap-3 bg-tertiary_bg rounded-lg">
          <div className="flex flex-col gap-5 px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-primary_text font-bold">
                Crie sua primeira playlist
              </p>
              <p className="text-sm font-medium text-primary_text">
                É fácil, vamos te ajudar.
              </p>
            </div>

            <button className="h-8 w-fit px-4 bg-white rounded-full flex justify-center items-center text-black font-bold text-sm hover:bg-white/80 transition-colors">
              Criar playlist
            </button>
          </div>
        </section>
      </div>

      <div className="mb-6 flex flex-col gap-7">
        <div className="px-4">
          <a
            href="#"
            className="font-normal text-xs text-secondary_text hover:text-primary_text hover:underline transition-colors"
          >
            Cookies
          </a>
        </div>

        <div className="px-4">
          <button className="h-8 w-fit px-3 flex gap-1 items-center justify-center border border-primary_border rounded-full text-primary_text text-sm font-bold hover:border-2 hover:border-secondary_border hover:scale-105 transition-all">
            <FontAwesomeIcon icon={faGlobe} />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
