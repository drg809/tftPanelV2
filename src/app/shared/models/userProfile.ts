export class UserProfile {
  public _id!: string;
  public name?:  string | null;
  public lastname?: string | null;
  public country?: string | null;
  public phone?: string | null;
  public deletedAt?: Date | null;
}
