function getYouTubeVideoId(url: string): string | null {
  try {
    const trailerUrl = new URL(url);
    const hostname = trailerUrl.hostname;

    if (hostname.includes("youtu.be")) {
      return trailerUrl.pathname.slice(1);
    }

    if (hostname.includes("youtube.com")) {
      const videoId = trailerUrl.searchParams.get("v");
      if (videoId) return videoId;

      const parts = trailerUrl.pathname.split("/");
      const embedIndex = parts.indexOf("embed");
      if (embedIndex !== -1 && parts[embedIndex + 1]) {
        return parts[embedIndex + 1];
      }

      const shortsIndex = parts.indexOf("shorts");
      if (shortsIndex !== -1 && parts[shortsIndex + 1]) {
        return parts[shortsIndex + 1];
      }
    }

    return null;
  } catch {
    return null;
  }
}

export default getYouTubeVideoId;
