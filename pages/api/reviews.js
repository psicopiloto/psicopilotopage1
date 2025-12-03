// pages/api/reviews.js
export default async function handler(req, res) {
  const placeId = "TU_PLACE_ID"; // Sustituye por el Place ID de tu negocio
  const apiKey = process.env.GOOGLE_API_KEY; // La API Key estará en Vercel

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );
    const data = await response.json();

    if (data.result && data.result.reviews) {
      res.status(200).json(data.result.reviews);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    res.status(500).json({ error: "Error fetching reviews" });
  }
}
