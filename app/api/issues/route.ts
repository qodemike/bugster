import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueValidationSchema } from "../../validationSchemas";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/authOptions";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const queryDate = new Date(searchParams.get("date") as string);

  const issues = await prisma.issue.findMany({
    where: {
      createdAt: {
        gte: new Date(queryDate),
        lt: new Date(new Date(queryDate).setDate(queryDate.getDate() + 1)),
      },
    },
  });
  return NextResponse.json(issues);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();

  const validation = issueValidationSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
