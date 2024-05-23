import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(request: NextRequest) {

    const { userId } = auth();

    if (!userId) {

        return NextResponse.json("Unauthorized", { status: 401 });

    }

    return NextResponse.json({ user: userId });
};