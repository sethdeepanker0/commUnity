'use client';

// pages/evacuation
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Footer from "@/components/Footer"
import { useState, useEffect } from 'react';
import { getEvacuationInstructions } from '@/lib/donationAPI';

type EvacuationRoute = {
  name: string;
  description: string;
};

export default function Evacuation() {
  const [evacuationRoutes, setEvacuationRoutes] = useState<EvacuationRoute[]>([]);

  useEffect(() => {
    const fetchEvacuationRoutes = async () => {
      try {
        const start = 'user_current_location'; // Replace with actual user location
        const end = 'nearest_safe_zone'; // Replace with actual safe zone
        const routes = await getEvacuationInstructions(start, end);
        setEvacuationRoutes(routes as EvacuationRoute[]);
      } catch (error) {
        console.error('Failed to fetch evacuation routes', error);
      }
    };
    fetchEvacuationRoutes();
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <Link href="/" prefetch={false}>
            commUnity
          </Link>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/predictions" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Predictions
          </Link>
          <Link href="/monitor" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Monitor
          </Link>
          <Link href="/donate" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Donate
          </Link>
        </nav>
      </header>
      <main className="flex-1 grid gap-8 p-4 md:p-8 lg:p-12">
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Evacuation Routes</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <MapIcon className="h-4 w-4 text-secondary" />
                View Map
              </Button>
              <div />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {evacuationRoutes.map((route, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-2">
                    <RouteIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{route.name}</h3>
                    <p className="text-sm text-muted-foreground">{route.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Shelters</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <MapIcon className="h-4 w-4 text-secondary" />
                View Map
              </Button>
              <div />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-2">
                  <ShieldIcon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Shelter A</h3>
                  <p className="text-sm text-muted-foreground">Primary emergency shelter location.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-2">
                  <ShieldIcon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Shelter B</h3>
                  <p className="text-sm text-muted-foreground">Secondary emergency shelter location.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-2">
                  <ShieldIcon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Shelter C</h3>
                  <p className="text-sm text-muted-foreground">Temporary emergency shelter location.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Transportation</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <MapIcon className="h-4 w-4 text-secondary" />
                View Map
              </Button>
              <div />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-muted rounded-full p-2">
                  <BusIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Recommended: Public Transit</h3>
                  <p className="text-sm text-muted-foreground">
                    Evacuation buses and shuttles are the recommended means of transportation.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-muted rounded-full p-2">
                  <CarIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Alternate: Private Vehicles</h3>
                  <p className="text-sm text-muted-foreground">
                    Evacuating by personal car is an alternate option if public transit is unavailable.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-muted rounded-full p-2">
                  <BikeIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Emergency: Bicycles</h3>
                  <p className="text-sm text-muted-foreground">
                    Bicycles may be used as an emergency means of transportation if other options are unavailable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Emergency Supplies</h2>
            <div className="flex items-center gap-2">
              <div />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-accent rounded-full p-2">
                  <AmbulanceIcon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Emergency Supplies</h3>
                  <p className="text-sm text-muted-foreground">Checklist and guidance for emergency kits.</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted py-4">
                <Button variant="outline" size="sm">
                  View Supplies
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-accent rounded-full p-2">
                  <SirenIcon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Warning Systems</h3>
                  <p className="text-sm text-muted-foreground">Information on emergency alert systems.</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted py-4">
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="bg-accent rounded-full p-2">
                  <ClipboardIcon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Evacuation Plans</h3>
                  <p className="text-sm text-muted-foreground">Download and review your local evacuation plan.</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted py-4">
                <Button variant="outline" size="sm">
                  Download Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

function AmbulanceIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function BikeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
}


function BusIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  )
}


function CarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function ClipboardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function MapIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function RouteIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  )
}


function ShieldIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function SirenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
      <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
      <path d="M21 12h1" />
      <path d="M18.5 4.5 18 5" />
      <path d="M2 12h1" />
      <path d="M12 2v1" />
      <path d="m4.929 4.929.707.707" />
      <path d="M12 12v6" />
    </svg>
  )
}
