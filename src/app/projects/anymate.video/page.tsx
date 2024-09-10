import Link from "next/link";

export default function AnymateVideo() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-10">
      <div className="flex flex-col">
        <h1>Anymate.Video</h1>
        <Link
          href="https://web.anymate.video"
          target="_blank"
          className="text-muted-foreground"
        >
          Check it out! (opens in new tab)
        </Link>
      </div>
      <div>
        <h2>Demo</h2>
        <video
          controls
          src={"/videos/anymate-demo.mp4"}
          autoPlay
          muted
          className="w-full aspect-auto"
        />
      </div>
      <div>
        <h2>What problem does it solve?</h2>
        <p className="text-muted-foreground">
          Anymate is a tool designed for teams of animators that are
          collaborating on a short animation. Before anymate, animators that we
          talked to had to manually keep track of which scenes were done by
          whom, and and the end of the working week someone had to sit down and
          render the animation at its current level of progress. We decided to
          help them by automating the process.
        </p>
      </div>
      <div>
        <h2>What does it do?</h2>
        <p className="text-muted-foreground">
          Anymate is a tool that allows users to keep track of animation
          progress in one place. The users can:
          <ul className="ml-4 marker:text-inherit list-disc	">
            <li>create a project by uploading the shots</li>
            <li>update the shots as they're drawn out</li>
            <li>assign work to animators</li>
          </ul>
          all inside a web app.
        </p>
      </div>
      <div>
        <h2>Tech approach</h2>
        <p className="text-muted-foreground">
          This app uses NextJs for the frontend, and firebase for cloud
          storage and database. The actual video-rendering is done
          in the browser using ffmpeg-wasm.
        </p>
      </div>
    </div>
  );
}
