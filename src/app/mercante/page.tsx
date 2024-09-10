import DemoImageCarousel from "@/components/demo-images-carousel";
import Link from "next/link";

const images = [
  "/mercante/mercante-screenshot-1.png",
  "/mercante/mercante-screenshot-2.png",
  "/mercante/mercante-screenshot-3.png",
];

export default function Mercante() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-10">
      <div className="flex flex-col">
        <h1>Mercante</h1>
        <Link
          href="https://mercante.ai/"
          target="_blank"
          className="text-muted-foreground"
        >
          Check out the website (opens in new tab)
        </Link>
      </div>
      <div>
        <h2>Demo Reel</h2>
        <DemoImageCarousel images={images} />
      </div>
      <div>
        <h2>What problem does it solve?</h2>
        <p className="text-muted-foreground">
          Hiring sales employees is expensive. Mercante aimed to automate basic
          sales by leveraging AI and Request-Augmented-Generation (RAG).
        </p>
      </div>
      <div>
        <h2>What does it do?</h2>
        <p className="text-muted-foreground">
          Mercante is a B2B tool for creating AI sales bots. The user could
          upload documents explaining the product range they offer, and the bot
          would then be able to answer questions based on this information. The
          bot could then be integrated into GMail, Telegram or directly on the
          client's website using a script tag.
        </p>
      </div>
      <div>
        <h2>Tech approach</h2>
        <p className="text-muted-foreground">
          This was a big project and I worked as part of a team - my work was
          focused primarily on the UI development, and GMail and website
          integrations. The frontend was implemented using NextJs and Tailwind.
          Unfortunately this project failed, and we dissolved the team. While
          the website is still up, there is no live demo to show the
          capabilities.
        </p>
      </div>
    </div>
  );
}
