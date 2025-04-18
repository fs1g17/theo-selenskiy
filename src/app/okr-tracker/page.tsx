import Link from "next/link";

export default function OkrTracker() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-10">
      <div className="flex flex-col">
        <h1>Objective-Key Result (OKR) Tracker</h1>
        <Link
          href="https://okr-supabase.vercel.app"
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
          src={"/videos/okr-tracker-demo.mp4"}
          autoPlay
          playsInline
          muted
          className="w-full aspect-auto grayscale"
        />
      </div>
      <div>
        <h2>What problem does it solve?</h2>
        <p className="text-muted-foreground">
          OKRs (Objectives and Key Results) are a goal-setting framework that
          helps teams align around clear, measurable goals by defining ambitious
          objectives and tracking progress through specific, actionable results.
          <br />
          Inspired after reading 'Measure What Matters: OKRs: The Simple Idea
          that Drives 10x Growth' by John Doerr, I decided to make an app that
          allows users to systematically approach goal setting.
        </p>
      </div>
      <div>
        <h2>What does it do?</h2>
        <p className="text-muted-foreground">
          OKR tracker is a tool that allows users to create and maintain their
          OKRs in one place, where they can:
          <ul className="ml-4 marker:text-inherit list-disc	">
            <li>create an objective</li>
            <li>add key results</li>
            <li>
              make a key result itself an objective with its own sub key-results
            </li>
          </ul>
          all inside a web app.
        </p>
      </div>
      <div>
        <h2>Tech approach</h2>
        <p className="text-muted-foreground">
          This app uses NextJs for the frontend, rendering the tree graph with
          d3 data visualisation library, and Supabase for the backend.
        </p>
      </div>
    </div>
  );
}
