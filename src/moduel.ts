// Generated by https://quicktype.io

export interface Modeule {
  id: number;
  title?: string;
  excert?: string;
  postUrl?: string;
  cover?: Cover;
  datePublished?: string;
  author?: Author;
}

export interface Author {
  profilePicture?: Cover;
}

export interface Cover {
  url?: string;
}