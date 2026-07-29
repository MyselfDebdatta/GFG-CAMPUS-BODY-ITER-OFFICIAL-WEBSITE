import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2, Clock, User } from "lucide-react";
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
import { cn } from "@/lib/utils";

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
    <div className="pb-24 pt-10">
      <div className="container-page">
        <Link to="/events" search={{ tab: event.status }} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Events
        </Link>

        {/* Hero Image Section */}
        <div className="relative mt-2 h-[50vh] min-h-[400px] w-full overflow-hidden rounded-[2rem] border border-hairline">
          <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-brand-foreground shadow-lg">
                {event.category}
              </span>
              <span className="rounded-full bg-[#FF8C00] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                Offline
              </span>
              <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-black capitalize shadow-lg">
                {event.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg">
              {event.title}
            </h1>
          </div>
        </div>

        {/* Info Grid & Registration */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Date */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 font-bold mb-3 text-foreground text-lg"><Calendar className="h-5 w-5 text-brand" /> Date</div>
              <div className="text-muted-foreground font-medium">{event.date}</div>
            </div>
            {/* Time */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 font-bold mb-3 text-foreground text-lg"><Clock className="h-5 w-5 text-brand" /> Time</div>
              <div className="text-muted-foreground font-medium">04:15 PM - 06:00 PM IST</div>
            </div>
            {/* Location */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 font-bold mb-3 text-foreground text-lg"><MapPin className="h-5 w-5 text-brand" /> Location</div>
              <div className="text-muted-foreground font-medium">{event.venue}</div>
            </div>
            {/* Participants */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 font-bold mb-3 text-foreground text-lg"><Users className="h-5 w-5 text-brand" /> Participants</div>
              <div className="text-muted-foreground font-medium">80+</div>
            </div>
          </div>

          <div className={cn(
            "rounded-2xl border border-hairline p-8 flex flex-col justify-center",
            event.status === "upcoming" ? "bg-surface-elevated" : "bg-brand/10 border-brand/20"
          )}>
            {event.status === "upcoming" ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Join this event</h3>
                <p className="text-sm text-muted-foreground mb-6">Secure your spot before registrations close!</p>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90 font-bold h-14 w-full text-lg shadow-[0_0_20px_rgba(47,141,70,0.3)]">
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
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-4 text-brand">Event Concluded</h3>
                <p className="text-base font-medium text-foreground mb-8">
                  This event has concluded. Stay tuned for more upcoming events!
                </p>
                <div className="mt-auto pt-6 border-t border-hairline/50">
                  <p className="text-xs text-muted-foreground mb-1">Questions? Contact us at</p>
                  <a href="mailto:gfg.iter@soa.ac.in" className="text-sm font-medium hover:text-brand transition-colors underline decoration-brand/30 underline-offset-4">
                    gfg.iter@soa.ac.in
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        {/* About & Speaker Section */}
        <div className="mt-6 flex flex-col gap-6">
          <div className="rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">About this Event</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>{event.description}</p>
              <p className="mt-4">
                Join us for an immersive experience where we bring together the brightest minds to learn, build, and grow. 
                Whether you're a seasoned developer or just starting out, there's something here for everyone. 
                Expect hands-on sessions, deep dives into the latest technologies, and plenty of opportunities to network.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-8">Speaker</h2>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="h-32 w-32 shrink-0 rounded-2xl bg-surface border border-hairline flex items-center justify-center shadow-lg">
                <User className="h-12 w-12 text-muted-foreground/50" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground">Will be updated soon</h3>
                <p className="text-brand font-semibold mt-1.5 tracking-wide text-sm uppercase">Guest Speaker</p>
                <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-3xl">
                  Speaker details are currently being finalized. Check back soon for more information on the industry experts and professionals leading this session.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Gallery Section */}
        <div className="mt-6 flex flex-col gap-6">
          <div className="rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Event Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden border border-hairline relative group">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden border border-hairline relative group">
                <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden border border-hairline relative group">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden border border-hairline relative group">
                <img src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=600&q=80" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden border border-hairline relative group">
                <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80" alt="Gallery 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
