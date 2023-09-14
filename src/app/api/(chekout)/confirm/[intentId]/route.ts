import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const PUT = async ({ params }: { params: { itentId: string } }) => {
  const { itentId } = params;
  try {
    await prisma.order.update({
      where: {
        intent_id: itentId,
      },
      data: { status: "Being preoared" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated!" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
