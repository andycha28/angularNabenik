export class Starship {
        name: string;
        model: string;
        photo: string;
        score: number;

        constructor(name: string, model: string , photo?: string) {
            this.name = name;
            this.model = model;
            this.photo = photo;
            this.score = 0;
        }

        voteUp(): void {
            this.score += 1;
        }
    
        voteDown(): void {
            this.score -= 1;
        }
}