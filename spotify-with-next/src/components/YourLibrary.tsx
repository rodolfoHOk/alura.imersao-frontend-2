import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

export function YourLibrary() {
  return (
    <div className="mt-2.5 h-full bg-secondary_bg rounded-lg flex flex-col justify-between px-2.5 py-5 gap-5">
      <div className="flex flex-col gap-5">
        <div className="px-2.5 flex flex-row justify-between items-center">
          <button className="py-2.5 flex items-center text-secondary_text font-semibold hover:text-primary_text transition-colors">
            <FontAwesomeIcon icon={faBook} className="text-xl font-light" />
            <span className="ml-3">Sua biblioteca</span>
          </button>

          <button className="w-10 h-10 rounded-full text-secondary_text font-semibold text-sm hover:bg-tertiary_bg hover:text-primary_text transition-colors">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <section className="flex flex-col justify-between gap-5 bg-tertiary_bg rounded-lg">
          <div className="flex flex-col gap-8 p-5">
            <div className="flex flex-col gap-3">
              <p className="text-primary_text font-bold">
                Crie sua primeira playlist
              </p>
              <p className="text-sm font-medium text-primary_text">
                É fácil, vamos te ajudar.
              </p>
            </div>

            <button className="h-10 w-fit px-4 bg-white rounded-full flex justify-center items-center text-black font-bold text-sm hover:bg-white/80 transition-colors">
              Criar playlist
            </button>
          </div>
        </section>
      </div>

      <div className="flex flex-col gap-5">
        <div className="px-2.5">
          <a
            href="#"
            className="font-normal text-sm text-secondary_text hover:text-primary_text hover:underline transition-colors"
          >
            Cookies
          </a>
        </div>

        <div className="px-2.5">
          <button className="h-10 w-fit px-4 flex gap-2 items-center justify-center border border-primary_border rounded-full text-primary_text text-sm font-bold hover:border-2 hover:border-secondary_border hover:scale-105 transition-all">
            <FontAwesomeIcon icon={faGlobe} />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
