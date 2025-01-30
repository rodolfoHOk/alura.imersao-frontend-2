'use client';
import { faSearch, faShip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ChangeEvent, useCallback, useMemo } from 'react';

export function SearchInput() {
  const debounceFn = useMemo(
    () => debounce((text: string) => redirect(`/new/search/${text}`), 750),
    []
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => debounceFn(event.target.value),
    [debounceFn]
  );

  return (
    <label className="w-full min-w-[270px] max-w-[490px] h-12 px-4 flex flex-row items-center gap-3 bg-tertiary_bg rounded-full text-secondary_text border border-transparent hover:bg-secondary_text/25 hover:border-secondary_text/30 transition-colors">
      <button className="hover:text-primary_text transition-colors">
        <FontAwesomeIcon
          icon={faSearch}
          className="w-5 h-5 hover:text-primary_text transition-colors"
        />
      </button>
      <input
        id="search-input"
        className="w-full bg-transparent outline-none placeholder:font-medium overflow-hidden overflow-ellipsis text-nowrap"
        type="search"
        placeholder="O que você quer ouvir?"
        maxLength={800}
        onChange={handleChange}
      />
      <div className="w-[1px] h-6 bg-secondary_text/50" />
      <Link
        href="/new/search"
        className="cursor-pointer hover:text-primary_text hover:scale-105 transition-all"
      >
        <FontAwesomeIcon icon={faShip} className="w-5 h-5" />
      </Link>
    </label>
  );
}
