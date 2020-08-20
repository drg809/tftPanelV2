export class SummonersStats {
  public id?: string;
  public leagueId?: string;
  public summonerId?: string;
  public summonerName?: string;
  public queueType?: string;
  public tier?: string;
  public rank?: string;
  public leaguePoints?: number;
  public wins?: number;
  public losses?: number;
  public hotStreak?: boolean;
  public veteran?: boolean;
  public freshBlood?: boolean;
  public inactive?: boolean;
  public miniSeries?: object
}

export class SummonersStatsDetails {
    public top1?: number;
    public top2?: number;
    public top3?: number;
    public top4?: number;
    public top5?: number;
    public top6?: number;
    public top7?: number;
    public top8?: number;
    public total?: number;
    public maxV?: number;
}
