export default function HorizontalRule({ size }: { size?: number }) {
  const widthClass = size ? `w-${size}` : "w-16";
  return <hr className={`border-t-1 my-8 ${widthClass}`} />;
}
