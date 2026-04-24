import DemoImageCarousel from "@/components/demo-images-carousel";
import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";
import Link from "next/link";

const images = [
  "/wlspro/wls-pro-screenshot-1.png",
  "/wlspro/wls-pro-screenshot-2.png",
  "/wlspro/wls-pro-screenshot-3.png",
  "/wlspro/wls-pro-screenshot-4.png",
];

export default function WLSPro() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader title="WLS Pro" />

      <ProjectSection num="01" heading="Demo Reel">
        <DemoImageCarousel images={images} />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          Managing a Public Blog Network (PBN) is difficult and tiresome. It
          requires creating and managing the blogs manually, let alone writing
          the actual articles. WLS Pro automates the entire process, from start
          to finish.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          WLS Pro is not only a Digital Asset Manager (DAM), it&apos;s also
          powered by an AI Content Management System (CMS) - a turn-key solution
          for a PBN, all in one. With WLS-Pro, the user can automatically create
          and deploy Wordpress or NextJs blogs, access them all from the
          dashboard, and generate articles for them all with the click of a
          button.
        </p>
        <p>
          Our target audience is SEO marketing agencies and businesses looking
          to increase the search engine ranking.
        </p>
        <p>
          The users can generate articles, edit articles, and even schedule
          articles for the future all from one dashboard.
        </p>
        <p>
          The articles include information from links supplied at the article
          generation page, as well as the links themselves, thus creating
          backlinks to the customer website and increasing the search engine
          ranking.
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>
          The frontend is implemented with NextJs and Tailwind. The backend uses
          firebase cloud functions. We also created a tool that allows the users
          to automatically create a Wordpress site on our platform - and
          generate an SSL certificate. The Wordpress blogs are droplets hosted
          on DigitalOcean. We use langchain and ChatGPT to generate the
          articles.
        </p>
      </ProjectSection>
    </div>
  );
}
