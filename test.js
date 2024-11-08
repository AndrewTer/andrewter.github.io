const url = 'https://store.steampowered.com/wishlist/profiles/76561198022125494/wishlistdata?p=2';

  const response = await fetch(url, {
      headers: {
          'Accept': 'application/json',
      },
  });

  const text = await response.text();
