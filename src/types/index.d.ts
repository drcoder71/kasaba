export interface ChildrenProps {
  children: React.ReactNode;
}

export interface VideoNewsType {
  id: string | number;
  title: string;
  video: string;
  time: string;
  description?: string;
  thumbnails?: string;
}

export interface StandardNewsDataType {
  id: string;
  title: string;
  description: string;
  publishedAt: {
    date: string;
    time: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface SearchDataType {
  id: string,
  title: string,
  publishedAt: {
    date: string;
    time: string;
  };
  news_type: string
}