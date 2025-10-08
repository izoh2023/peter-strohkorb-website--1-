import { neon } from "@neondatabase/serverless"
import { v4 as uuidv4 } from 'uuid';

if(!process.env.DATABASE_URL){
  throw new Error('no db url')
}

const sql = neon(process.env.DATABASE_URL!)

export interface Article {
  id: string // UUID
  title: string
  author: string
  hero_image?: string | null
  summary?: string | null
  content_json: object // Serialized Lexical JSON
  content_html: string
  seo_description?: string | null
  seo_keywords?: string | null
  created_at: string
  updated_at: string
}

export interface CreateArticleData {
  title: string
  author: string
  hero_image?: string
  summary?: string
  content_json: object
  content_html: string
  seo_description?: string
  seo_keywords?: string
}

interface topic {
    id: string
    month: string;
    title: string;
    description: string;
    summarylink: string;
    updated_at: string

}


export interface UpdateArticleData extends CreateArticleData {
  id: string
}

export async function getArticles(): Promise<Article[]> {
  const articles = await sql`
    SELECT * FROM articles 
    ORDER BY created_at DESC
  `
  return articles as Article[]
}

export async function getArticleById(id: string): Promise<Article | null> {
  const articles = await sql`
    SELECT * FROM articles 
    WHERE id = ${id}
  `
  return (articles[0] as Article) || null
}

export async function upsertArticle(data: UpdateArticleData | CreateArticleData): Promise<Article> {
  const articles = await sql`
    INSERT INTO articles 
      (id, title, author, hero_image, summary, content_json, content_html, seo_description, seo_keywords)
    VALUES 
      (${(data as UpdateArticleData).id || uuidv4()}, 
       ${data.title}, 
       ${data.author}, 
       ${data.hero_image || null}, 
       ${data.summary || null}, 
       ${data.content_json}, 
       ${data.content_html}, 
       ${data.seo_description || null}, 
       ${data.seo_keywords || null})
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      author = EXCLUDED.author,
      hero_image = EXCLUDED.hero_image,
      summary = EXCLUDED.summary,
      content_json = EXCLUDED.content_json,
      content_html = EXCLUDED.content_html,
      seo_description = EXCLUDED.seo_description,
      seo_keywords = EXCLUDED.seo_keywords,
      updated_at = CURRENT_TIMESTAMP
    RETURNING *
  `
  return articles[0] as Article
}


export async function deleteArticle(id: string): Promise<void> {
  await sql`
    DELETE FROM articles 
    WHERE id = ${id}
  `
}

export async function getTopics(): Promise<topic[]> {
  const topics = await sql`
    SELECT * FROM topics
    ORDER BY updated_at DESC
  `
  return topics as topic[]
}

export async function getTopicById(id: string): Promise<topic | null> {
  const topics = await sql`
    SELECT * FROM topics 
    WHERE id = ${id}
  `
  return (topics[0] as topic) || null
}

export async function upsertTopic(data: topic): Promise<topic> {
  const result = await sql`
    INSERT INTO topics (
      id, month, title, description, summarylink
    )
    VALUES (
      ${data.id || uuidv4()},
      ${data.month},
      ${data.title},
      ${data.description},
      ${data.summarylink}
    )
    ON CONFLICT (id) DO UPDATE SET
      month = EXCLUDED.month,
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      summarylink = EXCLUDED.summarylink,
      updated_at = CURRENT_TIMESTAMP
    RETURNING *;
  `

  return result[0] as topic
}

export async function deleteTopic(id: string): Promise<void> {
  await sql`
    DELETE FROM topics 
    WHERE id = ${id}
  `
}
