import DemoImageCarousel from "@/components/demo-images-carousel";
import Link from "next/link";

const images = [
  "/wlspro/wls-pro-screenshot-1.png",
  "/wlspro/wls-pro-screenshot-2.png",
  "/wlspro/wls-pro-screenshot-3.png",
  "/wlspro/wls-pro-screenshot-4.png",
];

export default function WLSPro() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-10">
      <div className="flex flex-col">
        <h1>WLS Pro</h1>
        <Link
          href="https://www.wlspro.com/"
          target="_blank"
          className="text-muted-foreground"
        >
          Check out the website (opens in new tab)
        </Link>
        <Link
          href="https://wls-pro.vercel.app/"
          target="_blank"
          className="text-muted-foreground"
        >
          Check out the live product (opens in new tab)
        </Link>
      </div>
      <div>
        <h2>Demo Reel</h2>
        <DemoImageCarousel images={images} />
      </div>
      <div>
        <h2>What problem does it solve?</h2>
        <p className="text-muted-foreground">
          Managing a Public Blog Network (PBN) is difficult and tiresome. It
          requires creating and managing the blogs manually, let alone writing
          the actual articles. WLS Pro automates the entire process, from start
          to finish.
        </p>
      </div>
      <div>
        <h2>What does it do?</h2>
        <p className="text-muted-foreground">
          WLS Pro is not only a Digital Asset Manager (DAM), it's also powered
          by an AI Content Management System (CMS) - a turn-key solution for a
          PBN, all in one. With WLS-Pro, the user can automatically create and
          deploy Wordpress or NextJs blogs, access them all from the dashboard,
          and generate articles for them all with the click of a button.
        </p>
        <p className="text-muted-foreground">
          Our target audience is SEO marketing agencies and businesses looking
          to increse the search engine ranking.
        </p>
        <p className="text-muted-foreground">
          The users can generate articles, edit articles, and even schedule
          articles for the future all from one dashboard.
        </p>
        <p className="text-muted-foreground">
          The articles include information from links supplied at the article
          generation page, as well as the links themselves, thus creating
          backlinks to the customer website and increasing the search engine
          ranking.
        </p>
      </div>
      <div>
        <h2>Tech approach</h2>
        <p className="text-muted-foreground">
          The frontend is implemented with NextJs and Tailwind. The backend uses
          firebase cloud functions. We also created a tool that allows the users
          to automatically create a Wordpress site on our platform - and
          generate an SSL certificate. The Wordpress blogs are droplets hosted
          on DigitalOcean. We use langchain and ChatGPT to generate the
          articles.
        </p>
      </div>
    </div>
  );
}
