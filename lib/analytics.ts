import { track } from '@vercel/analytics'

interface WindowWithGtag extends Window {
  gtag?: (
    command: 'event',
    action: string,
    params: {
      event_category?: string
      event_label?: string
      value?: number
      [key: string]: unknown
    }
  ) => void
}

/**
 * Tracks a custom event in Google Analytics 4.
 */
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined') {
    const properties: Record<string, string | number> = { category }
    if (label) properties.label = label
    if (value !== undefined) properties.value = value

    // Vercel Analytics is always enabled in production, so conversion events
    // remain measurable even when a GA4 measurement ID is not configured.
    track(action, properties)

    const win = window as unknown as WindowWithGtag
    if (win.gtag) {
      win.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }
}
