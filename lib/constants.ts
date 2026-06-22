/**
 * Brand constants — edit these in one place and the whole site updates.
 *
 * TODO before launch:
 *   - BUSINESS_JURISDICTION: the country/state where the business is registered.
 *     Required on Terms of Service and Privacy Policy to be legally enforceable.
 */

export const BRAND_NAME = 'Noir Talent Co.'
export const BRAND_TAGLINE = 'Private Creator Management'

// Social
export const INSTAGRAM_HANDLE = '' // TODO: create @noirtalentco account — not live yet; set handle once live
export const INSTAGRAM_URL = INSTAGRAM_HANDLE
  ? `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
  : ''

export const TIKTOK_HANDLE = '' // TODO: add once account is live
export const TIKTOK_URL = TIKTOK_HANDLE
  ? `https://www.tiktok.com/@${TIKTOK_HANDLE}`
  : ''

// Contact
export const CONTACT_EMAIL = 'noirtalentco@outlook.com'
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`
export const RESPONSE_WINDOW = '48–72 hours'

// Legal
export const BUSINESS_JURISDICTION = 'Queensland, Australia'
export const BUSINESS_ENTITY_NAME = BRAND_NAME // TODO: replace with full registered entity name once incorporated

// Formspree
export const APPLY_FORM_ID = 'xeevklny'
