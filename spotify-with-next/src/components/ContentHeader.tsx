'use client';
import Image from 'next/image';
import debounce from 'lodash.debounce';
import { ChangeEvent, useCallback, useMemo } from 'react';

interface ContentHeaderProps {
  onSearchInputChange: (text: string) => void;
}

export function ContentHeader({ onSearchInputChange }: ContentHeaderProps) {
  const debounceFn = useMemo(
    () => debounce((text: string) => onSearchInputChange(text), 750),
    [onSearchInputChange]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => debounceFn(event.target.value),
    [debounceFn]
  );

  return (
    <div className="p-3 flex flex-col xl:flex-row justify-between items-center bg-secondary_bg rounded-lg gap-4">
      <div className="flex flex-row items-center gap-6 px-2">
        <button className="w-8 h-8 bg-arrow_bg flex flex-row justify-center items-center rounded-full hover:bg-arrow_hover_bg transition-colors">
          <Image
            src="/assets/icons/small-left.png"
            alt=""
            width={28}
            height={28}
          />
        </button>
        <button className="w-8 h-8 bg-arrow_bg flex flex-row justify-center items-center rounded-full hover:bg-arrow_hover_bg transition-colors">
          <Image
            src="/assets/icons/small-right.png"
            alt=""
            width={28}
            height={28}
          />
        </button>
      </div>

      <div className="w-[364px] h-12 px-4 flex flex-row items-center gap-3 bg-tertiary_bg rounded-full text-secondary_text border border-transparent hover:bg-secondary_text/25 hover:border-secondary_text/30 transition-colors">
        <Image src="/assets/icons/search.png" alt="" width={28} height={28} />
        <input
          id="search-input"
          className="bg-transparent outline-none placeholder:font-medium overflow-hidden overflow-ellipsis text-nowrap"
          type="search"
          placeholder="O que você quer ouvir?"
          maxLength={800}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-row items-center gap-6">
        <button className="flex flex-row items-center text-secondary_text text-sm font-bold text-nowrap hover:text-primary_text hover:scale-105 transition-all">
          Inscrever-se
        </button>
        <button className="h-12 bg-white text-inverse_text font-bold px-8 rounded-full hover:bg-inverse_bg hover:scale-105 transition-all">
          Entrar
        </button>
      </div>
    </div>
  );
}
