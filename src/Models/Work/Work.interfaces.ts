interface Author {
  ORCID: string;
  "authenticated-orcid": boolean;
  given: string;
  family: string;
  sequence: string;
  affiliation: {
    name: string;
    place: string[];
  }[];
}

export interface I_WorkArticle {
  DOI: string;
  title: string[];
  author: Author[];
  published: {
    "date-parts": [[number, number, number]];
  };
  abstract: string;
}

export interface I_WorkAuthor {
  title: string[];
  author: Author[];
}
