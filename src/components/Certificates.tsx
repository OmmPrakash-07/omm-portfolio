"use client";

import { useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import { certificates } from "../data/certificates";

const CertificatePreview = dynamic(
  () => import("../components/CertificatePreview"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full animate-pulse items-center justify-center text-sm text-white/40">
        Loading certificate preview...
      </div>
    ),
  }
);

function CertificateCard({
  certificate,
}: {
  certificate: (typeof certificates)[number];
}) {
  return (
    <article className="relative z-0 flex h-[350px] w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-20 hover:scale-[1.06] hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:h-[370px] sm:w-[320px]">
      {/* Certificate PDF preview */}
      <div className="h-[245px] shrink-0 overflow-hidden bg-transparent sm:h-[260px]">
        <CertificatePreview
          pdfUrl={certificate.certificateUrl}
          title={certificate.title}
        />
      </div>

      {/* Certificate details */}
      <div className="flex min-h-0 flex-1 items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-sm font-semibold text-white">
            {certificate.title}
          </h3>

          <p className="mt-1 truncate text-xs text-white/55">
            {certificate.issuer}
          </p>

          {certificate.date && (
            <p className="mt-1 text-xs text-white/40">
              {certificate.date}
            </p>
          )}
        </div>

        <a
          href={certificate.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${certificate.title} certificate`}
          className="shrink-0 rounded-lg border border-white/10 p-2 text-cyan-300 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
        >
          <ExternalLink size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Certificates() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || certificates.length < 2) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    let animationFrame = 0;
    let previousTime = 0;
    let position = 0;

    // Speed in pixels per second.
    const speed = 25;

    const animate = (time: number) => {
      if (!previousTime) previousTime = time;

      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      if (!isPaused.current) {
        position += speed * delta;

        const halfWidth = track.scrollWidth / 2;

        if (halfWidth > 0 && position >= halfWidth) {
          position -= halfWidth;
        }

        track.scrollLeft = position;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const repeatedCertificates = [...certificates, ...certificates];

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="py-20 sm:py-28"
    >
      {/* Section heading */}
      <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
          Learning & achievements
        </p>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="certificates-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Certificates<span className="text-cyan-300">.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              Courses, certifications, and milestones from my learning journey.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/50">
            <Award size={18} aria-hidden="true" />
            <span>{certificates.length} certificates</span>
          </div>
        </div>
      </div>

      {/* Auto-sliding certificate track */}
      {certificates.length === 0 ? (
        <p className="px-5 text-center text-white/50">
          Certificates coming soon.
        </p>
      ) : (
        <div
          ref={trackRef}
          className="certificates-slider flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8"
          onMouseEnter={() => {
            isPaused.current = true;
          }}
          onMouseLeave={() => {
            isPaused.current = false;
          }}
          onFocus={() => {
            isPaused.current = true;
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              isPaused.current = false;
            }
          }}
        >
          {repeatedCertificates.map((certificate, index) => (
            <div
              key={`${certificate.id}-${index}`}
              className="shrink-0"
              aria-hidden={index >= certificates.length ? true : undefined}
            >
              <CertificateCard certificate={certificate} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}