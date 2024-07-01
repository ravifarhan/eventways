
import { getData } from '@/app/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const events = await getData("events");
  return NextResponse.json(events);
}

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const event = await getData("events");
//   event.push(body);
//   return NextResponse.json(event);
// }

// export async function DELETE(req: NextRequest) {
//   const body = await req.json();
//   const event = await getData("events");
//   event.splice(body, 1);
//   return NextResponse.json(event);
// }