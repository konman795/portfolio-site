export class Project {
    constructor(
        public id: number,
        public name: string,
        public url: string,
        public imagePath: string,
        public description: string,
        public state: string
    ) {}
}
