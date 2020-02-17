import { Products } from "./Products";
import { Payment } from "./Payment";

export class Orders {
  id: string;
  orderCode: string;
  orderDate: Date;
  quantity: number;
  products: Products = new Products();
  payment: Payment = new Payment();
}
