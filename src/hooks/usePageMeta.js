import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const SITE_URL = 'https://homestead.nuit.works'

const setAttr = (selector, attr, value) => {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/** Per-page title, description, canonical and social tags (the defaults live in index.html). */
export function usePageMeta(title, description) {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!title) return
    const url = SITE_URL + pathname
    document.title = title
    setAttr('meta[name="description"]', 'content', description)
    setAttr('link[rel="canonical"]', 'href', url)
    setAttr('meta[property="og:title"]', 'content', title)
    setAttr('meta[property="og:description"]', 'content', description)
    setAttr('meta[property="og:url"]', 'content', url)
    setAttr('meta[name="twitter:title"]', 'content', title)
    setAttr('meta[name="twitter:description"]', 'content', description)
  }, [title, description, pathname])
}
