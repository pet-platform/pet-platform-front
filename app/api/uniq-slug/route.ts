import { NextResponse } from 'next/server';

// this request only can access api/uniq-slug, cant catch api/uniq-slug/....
export async function GET(request: Request): Promise<Response> {
  return NextResponse.json({ data: `Router Slug ${request.url}` });
}
