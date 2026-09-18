import { POST as submitLead } from "@/app/api/lead/route";

export const runtime = "nodejs";

export async function POST(req: Request) {
  return submitLead(req);
}
