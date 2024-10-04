import React from "react";
import ExpoHighlightsPage from "./ExpoHighlightsPage";
import { getVideos } from "@/lib/api";
import Breadcrumb from "@/components/Breadcrumb";

export default async function Page() {
  const videos = await getVideos();

  return (
    <>
      <Breadcrumb category={null} customTitle="Expo Highlights" />
      {/* <Breadcrumb title={"Expo Highlights"} path={"expo-highlights"} /> */}
      <ExpoHighlightsPage videos={videos} />
    </>
  );
}
