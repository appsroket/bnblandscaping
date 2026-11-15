# BNB Landscaping — Miami website redesign

Modern, mobile-first, local SEO landing page for BNB Landscaping. Built with Next.js App Router and React, ready for Vercel.

## Start locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. In Vercel, import `appsroket/bnblandscaping` from GitHub.
2. Keep Framework Preset `Next.js`, Root Directory `./`, and default build command.
3. Deploy. Future pushes to `main` will trigger builds when Git integration is enabled.
4. Only point `bnblandscaping.com` to Vercel after the owner approves the design and verifies business details.

## Lead inquiries

The form intentionally launches the visitor's SMS app with a prefilled message to +1 (786) 606-6384. The user must tap **Send** inside their messaging app. There is no fake submission or storage, no third-party forms service, and no environment variables required. Desktop devices without SMS support should use the call link instead. For server-side lead capture, integrate an approved email/CRM provider with spam protection later.

## Verified versus provisional data

- Google business listing: 776 NE 81st St, Miami, FL 33138; +1 786-606-6384; daily 8 AM–6 PM; 4.6 stars / 54 reviews at research time.
- Existing website lists a *different*, Ohio-based number (+1 614-202-3400) and services such as snow removal. These do not match the supplied Miami Google Maps profile, so the new website uses the Miami Google listing.
- Miami is a confirmed home/service city. Do **not** infer other service-area cities without owner confirmation.
- Services are based on public reviews and existing website: lawn mowing, edging, palm/tree and hedge trimming, yard cleanup, clearing, mulching, landscape touch-ups. Confirm exact coverage and licenses before launch.
- Unsplash photos are illustrative stock imagery. They are **not** BNB projects and should be replaced with licensed photos of BNB's actual work.
- Review excerpt is from a public customer review and is presented without fabricated customer identities.
- Business hours, rating, review counts, contact information, service scope and domain ownership must be reconfirmed by the owner before go-live.

## Notes

- Responsive layout, accessible FAQ, HTML5 form validation, structured data, metadata, canonical, sitemap and robots.
- No invented testimonials, financing, warranties, certifications or years in business.
- For best Core Web Vitals, replace remote stock CSS background images with locally optimized owner-approved images.
