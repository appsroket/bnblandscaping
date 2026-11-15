import "./globals.css";
export const metadata = {
  metadataBase: new URL("https://bnblandscaping.com"),
  title: { default: "BNB Landscaping | Lawn Care & Landscaping in Miami, FL", template: "%s | BNB Landscaping" },
  description: "Miami lawn care, palm and tree trimming, hedge trimming, mulching and property cleanups. Call BNB Landscaping at (786) 606-6384 for a quote.",
  keywords: ["landscaping Miami", "lawn care Miami", "palm trimming Miami", "yard cleanup Miami", "landscaping company Miami"],
  alternates: {canonical: "/"},
  openGraph: {title:"BNB Landscaping | Miami's Outdoor Spaces, Elevated",description:"Dependable lawn care, tropical landscaping and property cleanups in Miami, Florida.",url:"https://bnblandscaping.com",siteName:"BNB Landscaping",locale:"en_US",type:"website"},
  robots: {index:true,follow:true}
};
export default function RootLayout({children}) {
 return <html lang="en"><body>{children}</body></html>;
}
