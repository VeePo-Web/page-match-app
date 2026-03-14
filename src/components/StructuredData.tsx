export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://parkergawryletz.com/#business",
        name: "Gawryletz Music Services",
        alternateName: "Parker Gawryletz",
        url: "https://parkergawryletz.com",
        description:
          "Premium wedding piano, private piano lessons, and live event music in Calgary, Canmore, and Banff.",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Calgary",
          addressRegion: "AB",
          addressCountry: "CA",
        },
        areaServed: [
          { "@type": "City", name: "Calgary" },
          { "@type": "City", name: "Cochrane" },
          { "@type": "City", name: "Canmore" },
          { "@type": "City", name: "City of Banff" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Music Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wedding Piano",
                description:
                  "Ceremony and reception piano for weddings in Calgary to Banff.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Piano Lessons",
                description:
                  "Private piano lessons in Calgary. All ages and levels. $60/hr.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Live Event Piano",
                description:
                  "Live piano for corporate galas, private dinners, and memorial services.",
              },
            },
          ],
        },
      },
      {
        "@type": "MusicGroup",
        name: "Parker Gawryletz",
        url: "https://parkergawryletz.com",
        genre: ["Classical", "Contemporary", "Wedding"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
