import { Products } from "./Products";
import { Payment } from "./Payment";

export class Orders {
  id: string;
  orderCode: string;
  orderDate: Date;
  products: Products = new Products();
  payment: Payment = new Payment();
}
