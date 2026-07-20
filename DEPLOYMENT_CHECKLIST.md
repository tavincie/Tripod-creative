# Deployment Checklist

This checklist is for preparing the current Tripod Creative site for preview deployment and public launch.

## 1. Required Environment Variables

Set these in Vercel before preview or production deployment:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - Used across shared WhatsApp CTAs, page-level CTAs, and the Contact booking form
  - Must be a real launch-ready number in international format digits only

- `NEXT_PUBLIC_SITE_URL`
  - Used for canonical URLs, language alternates, Open Graph URLs, and route metadata
  - Must be set to the final public base URL before production launch

## 2. Placeholder Values That Must Be Replaced Before Public Launch

The following items are still placeholder-based or intentionally simulated and should be replaced:

- WhatsApp number
  - Current fallback is a placeholder-style number when env var is missing

- Contact phone
  - Currently shown as `[Contact Phone Placeholder]`

- Contact email
  - Currently shown as `[Contact Email Placeholder]`

- Physical location
  - Currently shown as `Location details coming soon`

- Portfolio images
  - Portfolio uses placeholder visual cards instead of real project media

- Portfolio videos
  - Portfolio video items are still placeholder-based

- Showreel video
  - Homepage showreel is currently a simulated preview/overlay, not a real production video asset

- Final logo assets
  - Site currently uses text branding and the 3D/fallback logo treatment; final brand asset package should be confirmed if needed for launch

- Any missing real social links
  - Confirm every intended social platform link
  - Instagram is already confirmed:
    - `https://www.instagram.com/tripodcreative_/?hl=en`

## 3. Vercel Preview Deployment Steps

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add environment variables:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy a preview build.
5. Test all localized routes:
   - `/en`
   - `/sw`
   - `/en/about`
   - `/sw/about`
   - `/en/services`
   - `/sw/services`
   - `/en/portfolio`
   - `/sw/portfolio`
   - `/en/studio-academy`
   - `/sw/studio-academy`
   - `/en/contact`
   - `/sw/contact`
6. Test all WhatsApp links.
7. Test mobile responsiveness on real devices or device emulation.

## 4. Domain Setup Steps

1. Choose the final domain.
2. Add the domain in Vercel project settings.
3. Update DNS records at the domain registrar.
4. Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
5. Redeploy after the environment variable update.

## 5. SEO Checklist

Confirm the following before public launch:

- Metadata is set for:
  - Home
  - About
  - Services
  - Portfolio
  - Studio Academy
  - Contact

- Canonicals are correct per locale route.

- Language alternates are present for:
  - `en-US`
  - `sw-TZ`

- Open Graph metadata is present on key routes.

- Social preview image is added and confirmed.
  - This still needs to be finalized if a branded OG image has not been added yet.

- Sitemap exists and is submitted.
  - Not currently present in this repo.

- `robots.txt` exists and is confirmed.
  - Not currently present in this repo.

## 6. Performance Checklist

- Compress all images before launch.
- Replace placeholders with optimized WebP or AVIF assets.
- Lazy-load non-critical media where appropriate.
- Confirm the 3D hero fallback still works on mobile.
- Run Lighthouse after deployment on both desktop and mobile.

## 7. Content Checklist

- Confirm all English copy.
- Confirm all Swahili copy.
- Confirm service names.
- Confirm portfolio labels.
- Confirm contact details.
- Confirm no fake claims remain.

Specific content areas to double-check:

- Homepage hero and teaser copy
- Services descriptions
- Portfolio placeholder naming
- Studio Academy wording
- Contact placeholders
- Footer policy wording

## 8. Launch Blockers

These items currently prevent a clean public launch:

- Real `NEXT_PUBLIC_WHATSAPP_NUMBER` not confirmed in deployment environment
- Real contact phone not added
- Real contact email not added
- Real physical location not added
- Portfolio images not added
- Portfolio videos not added
- Real showreel video not added
- Final logo/brand asset confirmation still pending
- Any missing non-Instagram social links still need confirmation
- Social preview image still needs confirmation/final asset
- `sitemap` not yet added
- `robots.txt` not yet added

## 9. Recommended Pre-Launch Test Pass

Before going public, run one final verification pass for:

- Localized routing
- Header navigation
- Locale switcher path preservation
- Footer links
- WhatsApp floating button
- Contact form validation
- Contact WhatsApp redirect formatting
- Portfolio filtering
- Mobile overflow
- Reduced-motion behavior
- Metadata correctness
- Console errors in production preview

## 10. Launch Decision

### Ready for Vercel Preview

Yes. The project is ready for Vercel preview deployment once:

- GitHub repo is connected
- Required env vars are added in Vercel

### Ready for Public Launch

Not yet. Public launch should wait until the launch blockers above are resolved.
