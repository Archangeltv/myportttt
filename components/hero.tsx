"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScanlineCanvas from "./scanline-canvas";
import { identity } from "@/lib/portfolio-data";

const CHAPTERS = [
  { index: "01", title: "THE PERSON BEHIND THE CODE" },
  { index: "02", title: "PATTERNS & LOGIC" },
  { index: "03", title: "FROM CURIOSITY TO CODE" },
  { index: "04", title: "OFF THE CLOCK · WHAT MAKES ME, ME" },
  { index: "05", title: "A LITTLE MORE THAN A DEVELOPER" },
];

function MathIcon() {
  return (
    <svg
      className="inline-tag-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 4H6l6 8-6 8h12" />
    </svg>
  );
}

function RubiksIcon() {
  return (
    <svg
      className="inline-tag-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="M12 13v8" />
    </svg>
  );
}

function SudokuIcon() {
  return (
    <svg
      className="inline-tag-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

function ChessIcon() {
  return (
    <svg
      className="inline-tag-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 5 4 11h10l4-11-5 6-4-6-4 6-5-6zm1 15h16" />
    </svg>
  );
}

function ScrabbleIcon() {
  return (
    <svg
      className="inline-tag-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 16V8l6 8V8" />
    </svg>
  );
}

function InlineTag({
  src,
  svg,
  label,
}: {
  src?: string;
  svg?: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-tag">
      {src ? (
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          width={18}
          height={18}
          className="inline-tag-img"
          unoptimized
          loading="eager"
          decoding="async"
        />
      ) : svg ? (
        <span className="inline-tag-svg-wrap" aria-hidden="true">{svg}</span>
      ) : null}
      <span>{label}</span>
    </span>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [chapter, setChapter] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            onUpdate: (self) => {
              const p = self.progress;
              const fill = root.current?.querySelector(
                ".h-progress-fill",
              ) as HTMLElement | null;
              if (fill) {
                fill.style.transform = `scaleX(${Math.min(1, Math.max(0, (p - 0.08) / 0.88))})`;
              }

              let currentCh = 1;
              if (p > 0.78) currentCh = 5;
              else if (p > 0.6) currentCh = 4;
              else if (p > 0.42) currentCh = 3;
              else if (p > 0.24) currentCh = 2;
              else currentCh = 1;
              setChapter(currentCh);
            },
          },
        });

        // Step 0: Splash name scales down and dissolves
        tl.to(
          ".h-name",
          {
            scale: 0.65,
            opacity: 0,
            y: -25,
            ease: "power1.inOut",
            duration: 0.6,
          },
          0,
        )
          .to(".h-meta", { opacity: 0, ease: "none", duration: 0.25 }, 0)
          .to(
            ".h-story-nav",
            { opacity: 1, pointerEvents: "auto", ease: "none", duration: 0.25 },
            0.2,
          );

        // Slide 1: 0.5 -> 1.45 (fade out 1.45 -> 1.75)
        tl.fromTo(
          ".h-slide--1",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power1.out", duration: 0.5 },
          0.45,
        ).to(
          ".h-slide--1",
          { opacity: 0, y: -30, ease: "power1.in", duration: 0.35 },
          1.4,
        );

        // Slide 2: 1.65 -> 2.55 (fade out 2.55 -> 2.85)
        tl.fromTo(
          ".h-slide--2",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power1.out", duration: 0.5 },
          1.65,
        ).to(
          ".h-slide--2",
          { opacity: 0, y: -30, ease: "power1.in", duration: 0.35 },
          2.55,
        );

        // Slide 3: 2.75 -> 3.65 (fade out 3.65 -> 3.95)
        tl.fromTo(
          ".h-slide--3",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power1.out", duration: 0.5 },
          2.75,
        ).to(
          ".h-slide--3",
          { opacity: 0, y: -30, ease: "power1.in", duration: 0.35 },
          3.65,
        );

        // Slide 4: 3.85 -> 4.85 (fade out 4.85 -> 5.15)
        tl.fromTo(
          ".h-slide--4",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power1.out", duration: 0.5 },
          3.85,
        ).to(
          ".h-slide--4",
          { opacity: 0, y: -30, ease: "power1.in", duration: 0.35 },
          4.85,
        );

        // Slide 5: 5.05 -> 6.0
        tl.fromTo(
          ".h-slide--5",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power1.out", duration: 0.5 },
          5.05,
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="hero-wrap surface-ink"
      aria-label="Introduction and About Me"
    >
      <div className="hero-stick">
        <ScanlineCanvas />
        <div className="wrap relative z-10 w-full max-w-6xl px-4 sm:px-8">
          <div className="hero-stack">
            <div className="h-name">
              <p className="meta mb-4 text-accent">{identity.nickname}</p>
              <h1 className="display text-[clamp(3.5rem,19vw,17rem)]">
                {identity.first}
                <br />
                {identity.last}
              </h1>
            </div>

            {/* Slide 1 */}
            <div
              className="h-slide h-slide--1"
              aria-label="About: The person behind the code"
            >
              <h2 className="display text-[clamp(2.2rem,6.5vw,5.2rem)] leading-[0.94] tracking-[-0.04em] uppercase">
                A DEVELOPER BY PROFESSION.
                <br />
                A THINKER BY NATURE.
                <br />
                <span className="text-accent">A NERD AT HEART.</span>
              </h2>
              <div className="h-slide-desc">
                <p>
                  I&apos;m <strong>Aimiuwu Victor Idahosa</strong>, better known
                  as <strong>Archangel</strong>. I&apos;m a Full Stack Software
                  Developer from Lagos, Nigeria, with a love for
                  problem-solving, thoughtful design, and understanding how
                  things work beneath the surface.
                </p>
                <p>
                  I&apos;m drawn to the kind of problems that make you stop,
                  think, experiment, get things wrong, and keep going until
                  everything finally clicks.
                </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className="h-slide h-slide--2"
              aria-label="About: Patterns and logic"
            >
              <h2 className="display text-[clamp(2.2rem,6.5vw,5.2rem)] leading-[0.94] tracking-[-0.04em] uppercase">
                PATTERNS, LOGIC, STRATEGY.
                <br />
                TURNING IDEAS INTO{" "}
                <span className="text-accent">SOMETHING REAL.</span>
              </h2>
              <div className="h-slide-desc">
                <p>
                  Mathematics has always appealed to that side of me. I enjoy
                  patterns, logic, strategy, and the satisfaction of working
                  something out for myself.
                </p>
                <p>
                  That same curiosity is what drew me to software development.
                  For me, coding is more than writing instructions for a
                  computer; it&apos;s a way to turn ideas into something real,
                  useful, and interactive.
                </p>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              className="h-slide h-slide--3"
              aria-label="About: From curiosity to code"
            >
              <h2 className="display text-[clamp(2.2rem,6.5vw,5.2rem)] leading-[0.94] tracking-[-0.04em] uppercase">
                FROM FIRST SYNTAX IN 2020
                <br />
                TO <span className="text-accent">FULL-STACK SYSTEMS.</span>
              </h2>
              <div className="h-slide-desc">
                <p>
                  My journey into tech started in <strong>2020</strong>, after I
                  left school. I began learning HTML and earned my first HTML
                  certificate through SoloLearn that same year. It was a small
                  first step, but it opened the door to an entirely new world.
                </p>
                <p>
                  From there, I explored design and learned to appreciate how
                  digital products look, feel, and communicate. Eventually, I
                  found my place in full-stack development in{" "}
                  <strong>2022</strong>, where the creative side of building
                  interfaces meets the logical side of engineering systems.
                </p>
                <p>
                  In <strong>2023</strong>, I landed my first developer role and
                  began turning what I had learned into real-world experience
                  across frontend development, backend systems, databases, APIs,
                  and Web3 integrations. I also studied Computer Science at{" "}
                  <InlineTag src="/images/about/lasu.jpg" label="LASU" /> and
                  completed my <strong>NYSC in 2026</strong>.
                </p>
              </div>
            </div>

            {/* Slide 4 */}
            <div
              className="h-slide h-slide--4"
              aria-label="About: Off the clock and interests"
            >
              <h2 className="display text-[clamp(2.2rem,6.5vw,5.2rem)] leading-[0.94] tracking-[-0.04em] uppercase">
                THE THINGS THAT
                <br />
                <span className="text-accent">MAKE ME, ME.</span>
              </h2>
              <div className="h-slide-desc">
                <p>
                  I&apos;m naturally reserved, and I genuinely enjoy my own
                  space. I&apos;d rather spend time thinking, learning something
                  new, watching a documentary, playing a game, or getting
                  absorbed in an interest that most people might consider a
                  little too nerdy.
                </p>
                <p>
                  I love <InlineTag svg={<MathIcon />} label="Mathematics" />,
                  but I also enjoy solving a{" "}
                  <InlineTag svg={<RubiksIcon />} label="Rubik's Cube" />,
                  playing <InlineTag svg={<SudokuIcon />} label="Sudoku" />,{" "}
                  <InlineTag svg={<ScrabbleIcon />} label="Scrabble" />, and{" "}
                  <InlineTag svg={<ChessIcon />} label="Chess" />.
                </p>
                <p>
                  Gaming is another big part of my world, especially{" "}
                  <InlineTag src="/images/about/codm.jpg" label="COD Mobile" />{" "}
                  and{" "}
                  <InlineTag
                    src="/images/about/onestate.jpg"
                    label="OneState RP"
                  />
                  . When it comes to football, I&apos;m a{" "}
                  <InlineTag
                    src="/images/about/liverpool.jpg"
                    label="Liverpool FC"
                  />{" "}
                  supporter, and for me,{" "}
                  <InlineTag
                    src="/images/about/messi.jpg"
                    label="Lionel Messi is the GOAT"
                  />
                  . Music is just as personal :{" "}
                  <InlineTag
                    src="/images/about/spotify.jpg"
                    label="Santan Dave"
                  />{" "}
                  has been my top Spotify artist since 2022.
                </p>
              </div>
            </div>

            {/* Slide 5 */}
            <div
              className="h-slide h-slide--5"
              aria-label="About: A little more than a developer"
            >
              <h2 className="display text-[clamp(2.2rem,6.5vw,5.2rem)] leading-[0.94] tracking-[-0.04em] uppercase">
                I DON&apos;T NEED TO BE THE LOUDEST.
                <br />I LET WHAT I BUILD{" "}
                <span className="text-accent">SPEAK FOR ME.</span>
              </h2>
              <div className="h-slide-desc">
                <p>
                  I like things that make me think. I value my privacy, enjoy
                  having room to explore my interests, and appreciate the little
                  details that other people might overlook.
                </p>
                <p>
                  That probably explains why I&apos;m drawn to both creative
                  design and technical engineering. One lets me think about how
                  something should feel; the other lets me work out how to make
                  it happen.
                </p>
                <p className="mono text-accent text-xs sm:text-sm tracking-wider uppercase mt-4">
                  I&apos;m Archangel. I like solving problems, building useful
                  things, and figuring out how the world works, one curiosity at
                  a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Initial bottom metadata */}
        <div className="h-meta meta absolute inset-x-0 bottom-6 z-10 grid grid-cols-1 gap-1 px-[var(--gutter)] text-center opacity-70 sm:grid-cols-3 sm:text-left">
          <span>{identity.title}</span>
          <span className="sm:text-center">WEB / SYSTEMS / WEB3</span>
          <span className="sm:text-right">{identity.location}</span>
        </div>

        {/* Dynamic Story Indicator and Progress Bar */}
        <div className="h-story-nav absolute inset-x-0 bottom-6 z-10 px-[var(--gutter)] opacity-0 pointer-events-none transition-opacity">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs mono">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-accent font-bold">
                {chapter > 0 ? `0${chapter} / 05` : "01 / 05"}
              </span>
              <span className="hidden sm:inline opacity-60" aria-hidden="true">—</span>
              <span className="hidden sm:inline tracking-wider opacity-90 uppercase text-[11px]">
                {CHAPTERS[(chapter > 0 ? chapter : 1) - 1].title}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="opacity-80 text-[10px] tracking-wider uppercase font-semibold">
                SCROLL TO READ
              </span>
              <div className="w-24 sm:w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-progress-fill h-full bg-accent transition-transform duration-75 origin-left"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
