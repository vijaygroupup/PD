import {Deserializable} from "../../models/deserializable.model";

export class  UserUpdateModel implements Deserializable {
  firstName: string;
  lastName: string;
  address:string;
  city:string;
  state:string;
  country:string;
  aadharNumber:string;
  canDoDelivery:boolean;
  latitude:any;
  longitude:any;
  email:any;
  vendorFlag:boolean;
  vendorName:any;
  houseNo:any;
  parcelType:any;
  vendorRoleChange:any;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}