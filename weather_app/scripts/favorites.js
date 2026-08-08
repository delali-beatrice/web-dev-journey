export function saveFavorites(favoritesArray) {
    localStorage.setItem("favoriteCities", JSON.stringify(favoritesArray));
}

export function getFavorites() {
    const stored = localStorage.getItem("favoriteCities");
    return stored ? JSON.parse(stored) : [];
}

export function toggleFavorite(city) {
    let favorites = getFavorites();

    if (favorites.includes(city)) {
        favorites = favorites.filter((c) => c !== city);
        saveFavorites(favorites);
        return false; // not a favorite anymore
    } else {
        favorites.push(city);
        saveFavorites(favorites);
        return true; // now a favorite
    }
}