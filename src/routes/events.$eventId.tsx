import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";
import { EVENTS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const event = EVENTS.find((e) => e.id === params.eventId);
    if (!event) throw notFound();
    return event;
  },
  component: EventDetails,
});

function EventDetails() {
  const event = Route.useLoaderData();
  const [registered, setRegistered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  };

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-10 pb-20 border-b border-hairline">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/10 via-background to-background" />
        <div className="container-page relative">
          <Link to="/events" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to events
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand mb-4">
                {event.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {event.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-brand" /> {event.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand" /> {event.venue}</span>
                {event.status === "upcoming" && (
                  <span className="flex items-center gap-1.5 text-brand"><Clock className="h-4 w-4" /> Registration Open</span>
                )}
              </div>
            </div>
            
            <div className="shrink-0">
              {event.status === "upcoming" ? (
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90 font-bold h-14 px-10 text-lg shadow-[0_0_20px_rgba(47,141,70,0.3)]">
                      Register Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    {!registered ? (
                      <form onSubmit={handleRegister}>
                        <DialogHeader>
                          <DialogTitle>Register for {event.title}</DialogTitle>
                          <DialogDescription>
                            Fill out the form below to secure your spot.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-6">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" required placeholder="John Doe" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" required placeholder="john@iter.ac.in" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="branch">Branch & Year</Label>
                            <Input id="branch" required placeholder="CSE, 3rd Year" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-brand text-brand-foreground hover:bg-brand/90 font-semibold">
                            Confirm Registration
                          </Button>
                        </DialogFooter>
                      </form>
                    ) : (
                      <div className="py-12 text-center flex flex-col items-center">
                        <CheckCircle2 className="h-16 w-16 text-brand mb-4" />
                        <DialogTitle className="text-2xl">You're in!</DialogTitle>
                        <DialogDescription className="mt-2 text-base">
                          Your registration is confirmed. We've sent a calendar invite to your email.
                        </DialogDescription>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              ) : (
                <Button size="lg" disabled variant="outline" className="h-14 px-10 text-lg">
                  Event Concluded
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-page mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">About this event</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
              <p>{event.description}</p>
              <p className="mt-4">
                Join us for an immersive experience where we bring together the brightest minds to learn, build, and grow. 
                Whether you're a seasoned developer or just starting out, there's something here for everyone. 
                Expect hands-on sessions, deep dives into the latest technologies, and plenty of opportunities to network.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-hairline overflow-hidden">
            <img src={event.image} alt="Event cover" className="w-full h-auto aspect-video object-cover" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-hairline bg-surface-elevated p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-brand" /> Speakers
            </h3>
            <div className="grid gap-6">
              {event.speakers.map((s, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <img src={s.photo} alt={s.name} className="h-14 w-14 rounded-full object-cover border-2 border-transparent group-hover:border-brand transition-colors" />
                  <div>
                    <div className="font-bold text-foreground">{s.name}</div>
                    <div className="text-sm font-medium text-muted-foreground">{s.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
