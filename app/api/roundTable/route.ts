import { deleteTopic, getTopicById, getTopics, upsertTopic } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface topics {
    id: string
    month: string;
    title: string;
    description: string;
    summarylink: string
    updated_at: string
}


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      // No id → return all articles
      const topics = await getTopics()
      return NextResponse.json(topics)
    }

    // id exists → return single article
    const article = await getTopicById(id)
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error("Error fetching article(s):", error)
    return NextResponse.json(
      { error: "Failed to fetch article(s)" },
      { status: 500 }
    )
  }
}


export async function POST(req: NextRequest) {
    const data: topics = await req.json()

    if(!data){
        return NextResponse.json(
            {message: 'Bad Request'},
            {status: 400}
        )
    }
    try {
        const topics = await upsertTopic(data)
        return NextResponse.json(data, {status: 200})
    } catch (error) {
        console.error("Error creating topics:", error)
        return NextResponse.json({ error: "Failed to upsert topics" }, { status: 500 })
    }
    
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Missing topc ID" }, { status: 400 })
    }

    await deleteTopic(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting article:", error)
    return NextResponse.json({ error: "Failed to delete topic" }, { status: 500 })
  }
}