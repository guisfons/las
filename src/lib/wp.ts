export async function fetchWPGraphQL<T = any>(
  query: string,
  variables: Record<string, any> = {},
): Promise<T> {
  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!wpUrl) {
    throw new Error(
      "The environment variable NEXT_PUBLIC_WORDPRESS_API_URL is missing. Please add it to .env.local"
    );
  }

  // Bypass SSL verification in development for Lando/Local
  if (process.env.NODE_ENV === "development") {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(wpUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      next: {
        revalidate: 60, // Revalidate every 60 seconds (adjust as needed)
      },
    });

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      throw new Error("Failed to fetch API");
    }

    return json.data;
  } catch (error) {
    console.error("Error fetching WP GraphQL:", error);
    throw error;
  }
}
