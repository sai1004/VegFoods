
export class Customer {
    id: string;
    name: string;
    mobile: number;
    cCode: string;
    role: string;
    email: string;
    password: string;
    dob: Date;
    wishList: any[];
    active: boolean;
    address: Address = new Address();
    orders: Orders = new Orders();
    img: Img = new Img();
    createdBy: string;
    createdOn: Date;
    updatedBy: any;
    updatedOn: Date;
  }
  