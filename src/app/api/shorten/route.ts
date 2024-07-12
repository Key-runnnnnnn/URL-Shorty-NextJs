import { UrlShortenerService } from "@/services/UrlShortnerServices";
import { NextResponse } from "next/server";

export async function POST(req:Request){
  const {originalUrl} = await req.json();
  const shortnerService = new UrlShortenerService();
  const shortUrl = await shortnerService.shortenUrl(originalUrl);
  return NextResponse.json({shortUrl},{status:201});
}   