import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
  console.log(request.headers);
  const urlData = new URL(request.url);
  console.log(`SearchParam GET ${urlData.searchParams}`);
  return NextResponse.json({ data: { test: `Get Success` } });
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  console.log(`Post Body ${JSON.stringify(body)}`);
  return NextResponse.json({ data: `Post Success` });
}

export async function PUT(request: Request): Promise<Response> {
  const body = await request.json();
  console.log(`Put Body ${JSON.stringify(body)}`);
  // this is always get error
  return NextResponse.json({ data: 100 }, { status: 500 });
}
