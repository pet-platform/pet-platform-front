import { NextResponse } from 'next/server';

// this request only can access 
export async function GET(request: Request): Promise<Response> {
  return NextResponse.json({ data: `Router Slug ${request.url}` });
}
