import Image from "next/image";
import {
  ArrowUpRight,
  GitBranch,
  Network,
  RadioTower,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/portfolio-data";

const artworkIcons = {
  bridge: Network,
  wallet: GitBranch,
  bot: RadioTower,
  game: Sparkles,
};

function ProjectArtwork({
  type = "bot",
  number,
  image,
  name,
}: {
  type?: keyof typeof artworkIcons;
  number: string;
  image?: string;
  name: string;
}) {
  const Icon = artworkIcons[type] ?? RadioTower;
  return (
    <div
      className={`project-art ${type ? `project-art--${type}` : ""}`}
      aria-hidden="true"
    >
      <div className="art-corner art-corner--tl" />
      <div className="art-corner art-corner--tr" />
      <div className="art-corner art-corner--bl" />
      <div className="art-corner art-corner--br" />
      <div className="art-meta mono">
        <span>AV / STUDY {number}</span>
        <span>FIG. 0{number}</span>
      </div>
      {image ? (
        <div className="project-art-img-wrap">
          <div className="project-art-card">
            <Image
              src={image}
              alt={name}
              width={600}
              height={400}
              className="project-art-img"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="art-core">
            <Icon size={45} strokeWidth={0.8} />
            <span className="art-core-number">{number}</span>
          </div>
          <div className="art-grid-lines" />
        </>
      )}
      <div className="art-bottom mono">
        <span>STRUCTURE / SYSTEM / SIGNAL</span>
        <span>ARCHANGEL®</span>
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section
      className="work-section section-dark"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="work-heading wrap">
        <div>
          <p className="eyebrow mono">BUILT, TESTED, EXPLORED</p>
          <h2 id="work-heading" className="display-heading">
            IDEAS WITH
            <br />
            <span>WORKING PARTS.</span>
          </h2>
        </div>
        <p className="work-intro">
          A selection of product work across blockchain infrastructure, on-chain
          research, community tooling, and interactive experiences. Status
          labels distinguish experiments and prototypes from production systems.
        </p>
      </div>
      <div className="project-list wrap">
        {projects.map((project, index) => (
          <article
            className={`project-entry ${index % 2 ? "project-entry--reverse" : ""}`}
            key={project.number}
          >
            <ProjectArtwork
              type={project.visual}
              number={project.number}
              image={project.image}
              name={project.name}
            />
            <div className="project-copy">
              <div className="project-meta mono">
                <span>
                  {project.number} / {project.category}
                </span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3>
                {project.name}
                <span>.</span>
              </h3>
              {project.tagline ? (
                <p className="project-tagline meta">{project.tagline}</p>
              ) : null}
              <p className="project-summary">{project.summary}</p>
              {project.problem ? (
                <p className="project-detail-line">
                  <span className="mono">THE PROBLEM:</span> {project.problem}
                </p>
              ) : null}
              {project.solution ? (
                <p className="project-detail-line">
                  <span className="mono">WHAT IT DOES:</span> {project.solution}
                </p>
              ) : null}
              <p className="project-contribution">
                <span className="mono">WHAT I OWNED:</span> {project.contribution}
              </p>
              <div className="project-tech mono" aria-label="Technologies used">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-links">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    LIVE PROJECT <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="project-no-link mono">
                    PUBLIC LINK NOT PROVIDED
                  </span>
                )}
                {project.repository ? (
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    SOURCE <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="work-bottom wrap">
        <span className="mono">A GROWING ARCHIVE</span>
        <span className="work-bottom-rule" />
        <a href="#contact" className="text-link">
          HAVE A PROJECT IN MIND? <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

export default SelectedWork;
