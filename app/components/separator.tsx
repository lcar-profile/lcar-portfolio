export default function Separator({ size }: { size?: number | string }) {
  const width = size ? `w-${size}` : "w-20";
  return <hr className={`border-t-1 my-8 ${width}`} />;
}
