export class SumMatch {
  public id?: string;
  public userId!: string | null;
  public entrie?: string | null;
  public data: { metadata: object, info: {
    game_datetime: number,
    game_length: number,
    game_variation: string,
    game_version: string,
    participants: [{
      gold_left: number,
      last_round: number,
      level: number,
      placement: number,
      players_eliminated: number,
      puuid: string,
      time_eliminated: number,
      total_damage_to_players: number,
      r?: string,
      d?: string,
      name?: string,
      traits: [{
        name: string,
        num_units: number,
        style: number,
        tier_current: number,
        tier_total: number
      }],
      units: [{
        character_id: string,
        items: number[],
        name: string,
        rarity: number,
        tier: number
      }]
    }],
    queue_id: number,
    tft_set_number: number
  } };
}

export class MatchesPagination {
  public data?: [SumMatch];
  public pageIndex?: number;
  public pages?: number;
  public numResult?: number;
  public pageSize?: number;
}
