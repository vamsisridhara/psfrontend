export class PeopleSearchViewModel {
  constructor(public ID: number, 
    public FirstName: string,
    public LastName: string,
    public Address: string,
    public Age: number,
    public Interests: Array<string>,
    public PictureUrl : string) { }
}
