import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request, search) {
  const options = {
    method: "GET",
    url: process.env.url,
    params: {
      near: search.params.query,
      limit: "20",
    },
    headers: {
      "X-RapidAPI-Key": process.env.api_key,
      "X-RapidAPI-Host": process.env.host,
    },
  };
  try {
    const api_response = await axios.request(options);
    return NextResponse.json(api_response);
  } catch (error) {
    
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500, statusText: "internal server error" }
    );
  }
}
