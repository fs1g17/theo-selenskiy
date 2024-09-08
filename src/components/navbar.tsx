import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-16 border-b-2 border-b-primary flex justify-between items-center text-muted-foreground">
      Theo Selenskiy
      <div>
        <Link href="/">Home</Link>{" "}/{" "}
        <Link href="/projects">Projects</Link>{" "}/{" "}
        <Link href="/cv">CV</Link>
      </div>
    </div>
  );
}
