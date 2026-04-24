import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

export default function SponsorSpotter() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader
        title="Sponsor Spotter"
        externalHref="https://youtube-scraper-lake.vercel.app/"
        externalLabel="Live product"
      />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src={"/videos/sponsor-spotter-demo.mp4"}
          autoPlay
          muted
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          Marketing agencies that work with YouTubers need to keep track of
          their competitors, for example who sponsored a YouTuber&apos;s latest
          video? This information is mission-critical, and can take a long time
          if done by hand.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          This web app allows marketing agencies to keep track of
          YouTuber&apos;s video sponsors. When a YouTuber that is watched in the
          app uploads a new video, the database is populated with links that
          were included in the description. The user can then search all the
          videos in the database that were sponsored by a given company. The
          result can be downloaded as a CSV file.
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>
          The frontend is implemented using NextJs. The database that I used is
          the firestore NoSQL database. The way I get the latest video
          information is by subscribing to the Pub/Sub topic for a given
          YouTuber (using Google&apos;s pubsubhubbub pub/sub service). When a
          YouTuber uploads a new video, I parse the metadata and store it in the
          database. Then the user can perform a search using Algolia, which can
          match any keyword that&apos;s associated with the video (be it in the
          title, description or so on). The exporting function allows the users
          to fetch all the relevant videos by keyword, as well as their current
          views, likes and comment counts.
        </p>
      </ProjectSection>
    </div>
  );
}
