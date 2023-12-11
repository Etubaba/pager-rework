"use client";

import { markers } from "@/components/content";
import { worldMill } from "@react-jvectormap/world";
import dynamic from "next/dynamic";

const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((mod) => mod.VectorMap),
  { ssr: false }
);

import React from "react";

const WorldMap = ({
  setInfo,
}: {
  setInfo: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const markerStyle = {
    initial: {
      fill: "#E8238D",
      strokeWidth: "#E8238D",
    },
  };
  return (
    <div className="w-full h-[600px]">
      {typeof window !== "undefined" && (
        <VectorMap
          map={worldMill}
          backgroundColor="#101923"
          zoomOnScroll={false}
          markers={markers}
          markerStyle={markerStyle}
          onMarkerTipShow={function markerTip(event, label, code) {
            //@ts-ignore
            setInfo(label.html());
            //@ts-ignore
            return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${
                      //@ts-ignore
                      label.html()
                    }
                    </b>
                    </p>
                    </div>`);
          }}
        />
      )}
    </div>
  );
};

export default WorldMap;
