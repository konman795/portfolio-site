export class Project {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public logoPath: string,
    public description: string,
    public state: string,
    public cardBackgroundColor: string
  ) { }
}
