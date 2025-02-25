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
  