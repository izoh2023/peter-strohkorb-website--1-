import { type NextRequest, NextResponse } from "next/server"
import { deleteArticle, getArticleById, getArticles, upsertArticle } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      // No id → return all articles
      const articles = await getArticles()
      return NextResponse.json(articles)
    }

    // id exists → return single article
    const article = await getArticleById(id)
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

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const article = await upsertArticle(data)
    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    console.error("Error creating article:", error)
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Missing article ID" }, { status: 400 })
    }

    await deleteArticle(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting article:", error)
    return NextResponse.json({ error: "Failed to delete article" }, { status: 500 })
  }
}