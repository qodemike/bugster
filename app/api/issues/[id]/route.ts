import { issueValidationSchema } from "@/app/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/authOptions";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {

  const session = await getServerSession(authOptions);

  if (!session)
      return NextResponse.json({}, {status: 401})

  const body = await req.json();

  const validation = issueValidationSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue)
    return NextResponse.json({ error: "issue not found" }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  
  const session = await getServerSession(authOptions);

  if (!session)
      return NextResponse.json({}, {status: 401})

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  return prisma.issue
    .delete({
      where: { id: issue.id },
    })
    .then(() => NextResponse.json({}))
    .catch((err) => {
      NextResponse.json({ error: "Could not delete Issue!" }, { status: 500 });
      console.log(err);
    });
}
