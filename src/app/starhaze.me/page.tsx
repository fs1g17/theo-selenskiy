import Link from "next/link";

export default function StarHaze() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-10">
      <div className="flex flex-col">
        <h1>StarHaze</h1>
        <Link
          href="https://web.starhaze.me/"
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
          src={"/videos/starhaze-demo.mp4"}
          autoPlay
          playsInline
          muted
          className="w-full aspect-auto grayscale"
        />
      </div>
      <div>
        <h2>What problem does it solve?</h2>
        <p className="text-muted-foreground">
          Collecting user feedback takes time away from building products.
        </p>
      </div>
      <div>
        <h2>What does it do?</h2>
        <p className="text-muted-foreground">
          StarHaze allows the user to easily gather user feedback, view it in
          one place, and reach out to the users if they left their email!
        </p>
      </div>
      <div>
        <h2>Tech approach</h2>
        <p className="text-muted-foreground">
          The frontend is implemented using NextJs with ShadCn Tailwind
          component library. The backend is implemented using firebase cloud
          functions and uses the firestore NoSQL database.
        </p>
      </div>
    </div>
  );
}
