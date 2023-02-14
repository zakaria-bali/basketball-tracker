
export type Conference = "East" | "West"

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

export interface PaginatedResponse {
  meta: PaginationMetaData;
}

export interface AllTeamsResponse extends PaginatedResponse {
  data: Team[];

}

export interface Game {
  id: number;
  date: string;
  home_team: Team;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number
  status: string;
  time: string;
  visitor_team: Team
  visitor_team_score: number
}

export interface TeamDetails extends Team {
  games: Game[]
}

export interface GamesResponse extends PaginatedResponse{
  data: Game[]
}
