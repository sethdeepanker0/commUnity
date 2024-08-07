/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jfB06M3eHZp
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
// pages/monitor
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Footer from "@/components/ui/footer"

export default function monitor() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-primary text-primary-foreground px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="/" prefetch={false}>
          commUnity
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/predictions" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Predictions
          </Link>
          <Link href="/evacuation" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Evacuations
          </Link>
          <Link href="/donate" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Donate
          </Link>
        </div>
      </header>
      <main className="flex-1 bg-white text-foreground px-4 md:px-6 py-8 md:py-12 grid gap-8 md:gap-12">
        <section className="grid gap-4 md:gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold">Safety Monitor</h1>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              Evacuation Plan
            </Link>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl">
            Stay informed and prepared with our comprehensive disaster prediction and early warning system.
          </p>
        </section>
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Immediate Evacuation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="bg-red-500 text-red-50 rounded-full p-3">
                  <TriangleAlertIcon className="w-6 h-6" />
                </div>
                <p>A severe storm is approaching. Residents in the following areas should evacuate immediately:</p>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <MapPinIcon className="mr-2 inline-block h-4 w-4" />
                  Downtown District
                </li>
                <li>
                  <MapPinIcon className="mr-2 inline-block h-4 w-4" />
                  Coastal Neighborhoods
                </li>
                <li>
                  <MapPinIcon className="mr-2 inline-block h-4 w-4" />
                  Low-Lying Areas
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Weather Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 text-blue-50 rounded-full p-3">
                  <CloudIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">72°F</p>
                  <p className="text-muted-foreground">Partly Cloudy</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-muted rounded-md p-4 text-center">
                  <SunIcon className="mx-auto h-8 w-8 text-yellow-500" />
                  <p className="mt-2 text-sm font-medium">Tomorrow</p>
                  <p className="text-muted-foreground text-xs">75°F</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <CloudRainIcon className="mx-auto h-8 w-8 text-blue-500" />
                  <p className="mt-2 text-sm font-medium">Friday</p>
                  <p className="text-muted-foreground text-xs">68°F</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <CloudLightningIcon className="mx-auto h-8 w-8 text-orange-500" />
                  <p className="mt-2 text-sm font-medium">Saturday</p>
                  <p className="text-muted-foreground text-xs">72°F</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Seismic Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="bg-green-500 text-green-50 rounded-full p-3">
                  <EarthIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.2 Magnitude</p>
                  <p className="text-muted-foreground">Last 24 hours</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-muted rounded-md p-4 text-center">
                  <EarthIcon className="mx-auto h-8 w-8 text-green-500" />
                  <p className="mt-2 text-sm font-medium">Low Risk</p>
                  <p className="text-muted-foreground text-xs">Stable Conditions</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <EarthIcon className="mx-auto h-8 w-8 text-yellow-500" />
                  <p className="mt-2 text-sm font-medium">Moderate Risk</p>
                  <p className="text-muted-foreground text-xs">Increased Activity</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <EarthIcon className="mx-auto h-8 w-8 text-red-500" />
                  <p className="mt-2 text-sm font-medium">High Risk</p>
                  <p className="text-muted-foreground text-xs">Potential Hazards</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Flood Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 text-blue-50 rounded-full p-3">
                  <GlassWaterIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Moderate</p>
                  <p className="text-muted-foreground">Next 48 hours</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-muted rounded-md p-4 text-center">
                  <GlassWaterIcon className="mx-auto h-8 w-8 text-blue-500" />
                  <p className="mt-2 text-sm font-medium">Low Risk</p>
                  <p className="text-muted-foreground text-xs">Minor Flooding</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <GlassWaterIcon className="mx-auto h-8 w-8 text-yellow-500" />
                  <p className="mt-2 text-sm font-medium">Moderate Risk</p>
                  <p className="text-muted-foreground text-xs">Localized Flooding</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <GlassWaterIcon className="mx-auto h-8 w-8 text-red-500" />
                  <p className="mt-2 text-sm font-medium">High Risk</p>
                  <p className="text-muted-foreground text-xs">Widespread Flooding</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Air Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 text-yellow-50 rounded-full p-3">
                  <AirVentIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Moderate</p>
                  <p className="text-muted-foreground">Current Conditions</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-muted rounded-md p-4 text-center">
                  <AirVentIcon className="mx-auto h-8 w-8 text-green-500" />
                  <p className="mt-2 text-sm font-medium">Good</p>
                  <p className="text-muted-foreground text-xs">Minimal Pollution</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <AirVentIcon className="mx-auto h-8 w-8 text-yellow-500" />
                  <p className="mt-2 text-sm font-medium">Moderate</p>
                  <p className="text-muted-foreground text-xs">Elevated Pollution</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <AirVentIcon className="mx-auto h-8 w-8 text-red-500" />
                  <p className="mt-2 text-sm font-medium">Unhealthy</p>
                  <p className="text-muted-foreground text-xs">Hazardous Conditions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Wildfire Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="bg-red-500 text-red-50 rounded-full p-3">
                  <FlameIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">High</p>
                  <p className="text-muted-foreground">Next 72 hours</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-muted rounded-md p-4 text-center">
                  <FlameIcon className="mx-auto h-8 w-8 text-green-500" />
                  <p className="mt-2 text-sm font-medium">Low Risk</p>
                  <p className="text-muted-foreground text-xs">Minimal Conditions</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <FlameIcon className="mx-auto h-8 w-8 text-yellow-500" />
                  <p className="mt-2 text-sm font-medium">Moderate Risk</p>
                  <p className="text-muted-foreground text-xs">Elevated Conditions</p>
                </div>
                <div className="bg-muted rounded-md p-4 text-center">
                  <FlameIcon className="mx-auto h-8 w-8 text-red-500" />
                  <p className="mt-2 text-sm font-medium">High Risk</p>
                  <p className="text-muted-foreground text-xs">Extreme Conditions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="bg-muted rounded-lg p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Chat with our AI Assistant</h2>
            <Button variant="ghost" size="icon" className="rounded-full">
              <WebcamIcon className="w-6 h-6" />
              <span className="sr-only">Open Chat</span>
            </Button>
          </div>
          <p className="mt-2 text-muted-foreground">Get real-time updates and guidance from our AI assistant.</p>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

function AirVentIcon(props:any) {
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
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
      <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
    </svg>
  )
}


function CloudIcon(props:any) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CloudLightningIcon(props:any) {
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
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}


function CloudRainIcon(props:any) {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  )
}


function EarthIcon(props:any) {
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
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
      <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
      <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function FlameIcon(props:any) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function GlassWaterIcon(props:any) {
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
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  )
}


function MapPinIcon(props:any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function SunIcon(props:any) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function TriangleAlertIcon(props:any) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function WebcamIcon(props:any) {
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
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}
