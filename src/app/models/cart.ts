import { Product } from "./product";
import { Users } from "./user";

export interface Cart {
    user: Users,
    product: Product[]
}