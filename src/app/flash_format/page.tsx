import Link from "next/link";

export default function FlashFormat() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-10">
      <div className="flex flex-col">
        <h1>Flash Format</h1>
        <Link
          href="https://flash-format-git-main-aquilex.vercel.app/"
          target="_blank"
          className="text-muted-foreground"
        >
          Check out the live product! (opens in new tab)
        </Link>
      </div>
      <div>
        <h2>Demo</h2>
        <video
          controls
          src={"/videos/flashformat-demo.mp4"}
          autoPlay
          muted
          className="w-full aspect-auto grayscale"
        />
      </div>
      <div>
        <h2>What problem does it solve?</h2>
        <p className="text-muted-foreground">
          Converting images to different formats requires tools to be downloaded
          on the computer, but that's inconvenient if you just need to convert a
          single file quickly.
        </p>
      </div>
      <div>
        <h2>What does it do?</h2>
        <p className="text-muted-foreground">
          This small web app allows the user to convert images to different
          formats online, in a flash! Hence the name, flash format.
        </p>
      </div>
      <div>
        <h2>Tech approach</h2>
        <p className="text-muted-foreground">
          The frontend is implemented with NextJs. The file conversion is done
          with a firebase cloud function, using the 'sharp' library.
        </p>
      </div>
    </div>
  );
}
