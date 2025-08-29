export type YoutubeItem = { label?: string; url: string };
export type ImageItem = { label?: string; src: string };
export type VideoItem = { label?: string; src: string };

export type SeoraeJson = {
  profile: {
    realname: string;
    name: string;
    englishname: string;
    dateOfBirth: string;
    heightCm: number;
    weightKg: number;
    education: string;
    specialties: string[];
    affiliations: string[];
    introduction: string;
  };
  contact: {
    phone?: string;
    email?: string;
    instagramHandle?: string;
    youtubeHandle?: string;
  };
  media: {
    screen: Array<{
      type: string;
      title: string;
      broadcaster?: string;
      producer?: string;
      role?: string;
      year?: number | null;
    }>;
    modelMv: Array<{
      type: string;
      title: string;
      year?: number | null;
      url?: string | null; // 링크가 없을 수 있으니 nullable
    }>;
    theater: Array<{
      year: number;
      title: string;
      type?: string;
      award?: string;
      note?: string;
      highlight?: boolean;
    }>;
  };
  assets?: {
    images?: ImageItem[];
    youtube?: YoutubeItem[];
    video?: VideoItem[];
  };
  updatedAt?: string;
};
