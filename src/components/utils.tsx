export const TextFiller = ({ lines = 10 }) => {
  return (
    <div className='pt-5'>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-2 bg-neutral-200 rounded-full mb-2.5 ${i === lines - 1 ? 'w-3/4' : ''}`} />
      ))}
    </div>
  );
};
