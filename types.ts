
export interface ShortenedURL {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  title: string;
  createdAt: number;
  clicks: number;
}

export interface URLStats {
  totalShortened: number;
  totalClicks: number;
}
