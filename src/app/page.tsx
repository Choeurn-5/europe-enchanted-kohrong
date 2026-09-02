async function getRooms() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://cms.europeenchantedkohrong.com/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetRooms {
            rooms {
              nodes {
                id
                title
                roomDetails {
                  maxCapacity
                  roomSize
                  bedType
                  innconnectDirectUrl
                  mainImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }
          }
        `,
      }),
      next: { revalidate: 10 },
    }
  );

  const { data } = await res.json();
  return data?.rooms?.nodes || [];
}

export default async function Home() {
  const rooms = await getRooms();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-emerald-400">
          Europe Enchanted Koh Rong - Rooms
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room: any) => {
            const details = room.roomDetails;
            const imageUrl = details?.mainImage?.node?.sourceUrl;

            return (
              <div
                key={room.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={details?.mainImage?.node?.altText || room.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">{room.title}</h2>
                  
                  <div className="space-y-2 text-sm text-slate-300 mb-6">
                    <p>🛏️ Bed: <span className="text-white font-medium">{details?.bedType || 'N/A'}</span></p>
                    <p>👥 Max Guests: <span className="text-white font-medium">{details?.maxCapacity || 'N/A'}</span></p>
                    <p>📐 Size: <span className="text-white font-medium">{details?.roomSize ? `${details.roomSize} m²` : 'N/A'}</span></p>
                  </div>

                  {details?.innconnectDirectUrl && (
                    <a
                      href={details.innconnectDirectUrl.startsWith('http') ? details.innconnectDirectUrl : `https://${details.innconnectDirectUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Book Direct
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}