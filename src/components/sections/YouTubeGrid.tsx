"use client";
import YouTubeThumbPlayer from "./YouTubeThumbPlayer";
import type { YoutubeItem } from "@/types/seorae";

export default function YouTubeGrid({
  items,
}: {
  items: ReadonlyArray<YoutubeItem>;
}) {
  if (!items?.length) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 16,
      }}
    >
      {items.map((it, i) => (
        <YouTubeThumbPlayer key={i} url={it.url} label={it.label} />
      ))}
    </div>
  );
}
