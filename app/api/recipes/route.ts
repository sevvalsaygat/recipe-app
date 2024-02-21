import { NextRequest, NextResponse } from "next/server";

import { materials } from "@mock";
import { ListResponseType, MaterialType, ErrorResponseType } from "@api";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json<ListResponseType<MaterialType>>({
      data: materials as MaterialType[],
    });
  } catch (error) {
    return NextResponse.json<ErrorResponseType>(
      {
        message: "Something goes wrong while getting materials",
      },
      {
        status: 500,
      }
    );
  }
}
