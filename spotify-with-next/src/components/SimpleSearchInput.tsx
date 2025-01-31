'use client';
import Image from 'next/image';
import debounce from 'lodash.debounce';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { redirect } from 'next/navigation';

export function SimpleSearchInput() {
  const debounceFn = useMemo(
    () => debounce((text: string) => redirect(`/imersao/search/${text}`), 750),
    []
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => debounceFn(event.target.value),
    [debounceFn]
  );

  return (
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
  );
}
