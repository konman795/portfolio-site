import { ScreenShot } from './screenshot.model';

export class Project {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public logoPath: string,
    public description: string,
    public solution: string,
    public contribution: string,
    public technologiesUsed: string[],
    public screenshots: ScreenShot[],
    public state: string,
    public cardBackgroundColor: string,
    public dialogHeaderBackgroundColor: string
  ) { }
}
