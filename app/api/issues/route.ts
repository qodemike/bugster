import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';
import prisma from '@/prisma/client'

const validateIssueSchema = z.object({
    title: z.string().min(2,'Title is too short').max(255),
    description: z.string().min(2)
})

export async function  POST(request: NextRequest) {
    const body = await request.json()

    const validation = validateIssueSchema.safeParse(body)

    if (!validation.success) 
        return NextResponse.json(validation.error.errors, {status: 400})

    const newIssue = await prisma.issue.create({
        data: {title: body.title, description: body.description}
    })

    return NextResponse.json(newIssue, {status: 201});
}