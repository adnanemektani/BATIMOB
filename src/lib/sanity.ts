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
  useCdn: true,
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export type SanityProject = {
  _id: string
  slug: {current: string}
  featured: boolean
  image: SanityImageSource
  nameFr: string
  nameEn: string
  nameAr: string
  sector: string
  year: string
  textFr: string
  textEn: string
  textAr: string
}

export type SanityNews = {
  _id: string
  titleFr: string
  titleEn: string
  titleAr: string
  date: string
  category: string
  textFr: string
  textEn: string
  textAr: string
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
