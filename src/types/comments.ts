import { iCarComments } from "./cars.type";
import { iUserComments } from "./user.type";

export interface iComment {
    id: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
    car: iCarComments;
    user: iUserComments;
}
