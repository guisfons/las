export async function fetchWPGraphQL<T = unknown>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  let wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!wpUrl) {
    throw new Error(
      'The environment variable NEXT_PUBLIC_WORDPRESS_API_URL is missing. Please add it to .env.local',
    );
  }

  // Ensure the URL contains graphql (either as a path or query param)
  if (!wpUrl.includes('graphql')) {
    wpUrl = wpUrl.replace(/\/$/, '') + '/graphql';
  }

  // Bypass SSL verification in development for Lando/Local
  if (process.env.NODE_ENV === 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await fetch(wpUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 0 : 60, // Disable cache in development, 60s in production
      },
    });

    const json = await res.json();

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      throw new Error('Failed to fetch API');
    }

    return json.data;
  } catch (error) {
    console.error('Error fetching WP GraphQL:', error);
    throw error;
  }
}
