"use client";
import { useEffect, useRef } from "react";

type MapProps = { lat: number; lng: number; zoom?: number };

export default function Map({ lat, lng, zoom = 14 }: MapProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) return;

    const scriptId = "google-maps-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      document.body.appendChild(script);
      script.onload = init;
    } else {
      // @ts-expect-error google from window
      if (window.google && window.google.maps) init();
    }

    function init() {
      // @ts-expect-error google from window
      const gmaps = window.google.maps as typeof google.maps;
      const map = new gmaps.Map(ref.current as HTMLDivElement, {
        center: { lat, lng },
        zoom,
      });
      new gmaps.Marker({ position: { lat, lng }, map });
    }
  }, [lat, lng, zoom]);

  return <div ref={ref} className="w-full h-72 rounded-lg border" />;
}

