import {Photo} from './photo';

export interface Member {
    id: number;
    username: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    inroduction?: any;
    interests: string;
    lookingFor: string;
    city: string;
    country: string;
    photos: Photo[];
}

