

type Conference = "East" | "West"

export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: Conference
  division: string
  full_name: string
  name: string
}


export interface PaginationMetaData {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
}

export interface AllTeamsResponse {
  data: Team[];
  meta:PaginationMetaData

}
