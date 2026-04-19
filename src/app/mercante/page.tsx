import DemoImageCarousel from "@/components/demo-images-carousel";
import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

const images = [
  "/mercante/mercante-screenshot-1.png",
  "/mercante/mercante-screenshot-2.png",
  "/mercante/mercante-screenshot-3.png",
];

export default function Mercante() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader
        title="Mercante"
        externalHref="https://mercante.ai/"
        externalLabel="Website"
      />

      <ProjectSection num="01" heading="Demo Reel">
        <DemoImageCarousel images={images} />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          Hiring sales employees is expensive. Mercante aimed to automate basic
          sales by leveraging AI and Request-Augmented-Generation (RAG).
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          Mercante is a B2B tool for creating AI sales bots. The user could
          upload documents explaining the product range they offer, and the bot
          would then be able to answer questions based on this information. The
          bot could then be integrated into GMail, Telegram or directly on the
          client&apos;s website using a script tag.
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>
          This was a big project and I worked as part of a team - my work was
          focused primarily on the UI development, and GMail and website
          integrations. The frontend was implemented using NextJs and Tailwind.
          Unfortunately this project failed, and we dissolved the team. While
          the website is still up, there is no live demo to show the
          capabilities.
        </p>
      </ProjectSection>
    </div>
  );
}
