import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

export type SanityImageSource = {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '7vrdobo0',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export const sanityWriteClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '7vrdobo0',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Une image Sanity peut être incomplète (objet image sans asset référencé).
 * `urlFor()` lèverait une exception dans ce cas : on filtre donc systématiquement.
 */
export function isUsableImage(
  image?: SanityImageSource | null,
): image is SanityImageSource {
  if (!image) return false
  const asset = image.asset as { _ref?: string; _id?: string } | undefined
  return Boolean(asset && (asset._ref || asset._id))
}

export function usableImages(
  images?: SanityImageSource[],
): SanityImageSource[] {
  return (images ?? []).filter(isUsableImage)
}

export type SanityProject = {
  _id: string
  slug: {current: string}
  featured: boolean
  title?: string
  images?: SanityImageSource[]
  image?: SanityImageSource
  nameFr: string
  nameEn: string
  nameAr: string
  sector: string
  year: string
  textFr: string
  textEn: string
  textAr: string
}

export type SanityService = {
  _id: string
  slug: {current: string}
  titleFr: string
  titleEn: string
  titleAr: string
  images?: SanityImageSource[]
  logo?: SanityImageSource
  textFr: string
  textEn: string
  textAr: string
  order?: number
}

export function projectImages(project: SanityProject): SanityImageSource[] {
  const images = usableImages(project.images)
  if (images.length > 0) return images
  if (isUsableImage(project.image)) return [project.image]
  return []
}

export type SanityNews = {
  _id: string
  slug?: {current: string}
  titleFr: string
  titleEn: string
  titleAr: string
  date: string
  category: string
  textFr: string
  textEn: string
  textAr: string
  image?: SanityImageSource
  url?: string
}

/**
 * Clé d'URL utilisée pour les actualités : le slug s'il existe, sinon l'_id.
 * Les actualités créées avant l'ajout du champ slug n'en ont pas encore.
 */
export function newsKey(news: SanityNews): string {
  return news.slug?.current || news._id
}

export async function getProjects(): Promise<SanityProject[]> {
  return sanityClient.fetch(`*[_type == "project"] | order(_createdAt desc)`)
}

export async function getFeaturedProject(): Promise<SanityProject | null> {
  return sanityClient.fetch(`*[_type == "project" && featured == true][0]`)
}

export async function getNews(): Promise<SanityNews[]> {
  return sanityClient.fetch(`*[_type == "news"] | order(_createdAt desc)`)
}

export async function getServices(): Promise<SanityService[]> {
  return sanityClient.fetch(`*[_type == "service"] | order(_createdAt desc)`)
}

export async function getServiceBySlug(
  slug: string,
): Promise<SanityService | null> {
  return sanityClient.fetch(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug },
  )
}

export async function getProjectBySlug(
  slug: string,
): Promise<SanityProject | null> {
  return sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    { slug },
  )
}

export async function getNewsByKey(key: string): Promise<SanityNews | null> {
  return sanityClient.fetch(
    `*[_type == "news" && (slug.current == $key || _id == $key)][0]`,
    { key },
  )
}
