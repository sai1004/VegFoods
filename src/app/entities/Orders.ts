import { Products } from "./Products";
import { Payment } from "./Payment";

export class Orders {
  id: string;
  products: Products = new Products();
  payment: Payment = new Payment();
}
