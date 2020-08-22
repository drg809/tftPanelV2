export class Summoner {
  public _id?: string;
  public userId!: string | null;
  public summonerName!: string | null;
  public puuid?: string | null;
  public region?:  string | null;
  public summonerLevel?: number | null;
  public accountId?: string | null;
  public profileIconId?: number | null;
  public main?: boolean;
  public deletedAt?: Date | null;
}
