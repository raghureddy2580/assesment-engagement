import { createFileRoute } from "@tanstack/react-router";
import { Eng007Home } from "../components/eng007-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ananya & Aarav — Engagement Invitation" },
      { name: "description", content: "Join Ananya Sharma and Aarav Verma as they celebrate their engagement on 14 September 2026." },
      { property: "og:title", content: "Ananya & Aarav — Engagement Invitation" },
      { property: "og:description", content: "Celebrate the engagement of Ananya Sharma and Aarav Verma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Eng007Home />;
}
