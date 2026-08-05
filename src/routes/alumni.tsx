import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/alumni")({
  beforeLoad: () => {
    throw redirect({
      to: "/hall-of-fame",
      replace: true,
    });
  },
});
