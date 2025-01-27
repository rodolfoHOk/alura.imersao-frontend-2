import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

export function YourLibrary() {
  return (
    <div className="mt-3 bg-secondary_bg rounded-lg">
      <div className="p-5 flex flex-row justify-between">
        <a
          href="#"
          className="text-secondary_text font-semibold hover:text-primary_text transition-colors"
        >
          <FontAwesomeIcon icon={faBook} />
          <span className="ml-2">Sua biblioteca</span>
        </a>

        <a
          href="#"
          className="text-secondary_text font-semibold text-sm hover:text-primary_text transition-colors"
        >
          <FontAwesomeIcon icon={faPlus} />
        </a>
      </div>
    </div>
  );
}
