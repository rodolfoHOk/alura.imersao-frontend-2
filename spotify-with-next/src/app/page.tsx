import { ContentHeader } from '@/components/ContentHeader';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <ContentHeader />

      <div className="w-full h-full flex flex-col justify-center items-center bg-secondary_bg rounded-lg">
        <p>ToDo</p>
      </div>
    </div>
  );
}
