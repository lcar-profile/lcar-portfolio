export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex fixed bottom-0 gap-1 w-full py-6 justify-center items-center text-sm text-muted-foreground">
      <div>&copy;</div>
      {year}
      <div>Lai Carson.</div>
      <div>All rights reserved.</div>
    </div>
  );
}
