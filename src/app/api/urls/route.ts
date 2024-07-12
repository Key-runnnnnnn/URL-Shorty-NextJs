import { UrlShortenerService } from "@/services/UrlShortnerServices";
import { NextResponse } from "next/server";
import { cache } from "react";

const fetchUrls = cache(async ()=>{
  const shortnerService = new UrlShortenerService();
  const response = await shortnerService.getAllUrls();
  return response;
})

export async function GET(){
  const urls = await fetchUrls();
  return NextResponse.json({urls}).headers.set('Cache-Control', 'public, max-age=30, s-maxage=30, stale-while-revalidate=59');
}