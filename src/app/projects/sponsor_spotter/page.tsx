import Link from "next/link";

export default function SponsorSpotter() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-10">
      <div className="flex flex-col">
        <h1>Sponsor Spotter</h1>
        <Link
          href="https://theo-sub.web.app/"
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
          src={"/videos/sponsor-spotter-demo.mp4"}
          autoPlay
          muted
          className="w-full aspect-auto"
        />
      </div>
      <div>
        <h2>What problem does it solve?</h2>
        <p className="text-muted-foreground">
          Marketing agencies that work with YouTubers need to keep track of
          their competitors, for examlpe who sponsored a YouTuber's latest
          video? This information is mission-critical, and can take a long time
          if done by hand.
        </p>
      </div>
      <div>
        <h2>What does it do?</h2>
        <p className="text-muted-foreground">
          This web app allows marketing agencies to keep track of YouTuber's
          video sponsors. When a YouTuber that is watched in the app uploads a
          new video, the database is populated with links that were included in
          the description. The user can then search all the videos in the
          database that were sponsored by a given company. The result can be
          downloaded as a CSV file.
        </p>
      </div>
      <div>
        <h2>Tech approach</h2>
        <p className="text-muted-foreground">
          The frontend is implemented using React. The database that I used is
          the firestore NoSQL database. The way I get the latest video
          inforamtion is by subscribing to the Pub/Sub topic for a given
          YouTuber (using Google's pubsubhubbub pub/sub service). When a
          YouTuber uploads a new video, I parse the metadata, unshorten the URLs
          and store them in the database. Then the user can perform a search
          using Algolia.
        </p>
      </div>
    </div>
  );
}
