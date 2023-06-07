import { UsuarioModel } from '../../modules/usuario/model/UsuarioModel';
import { AddressType } from './AddressType';
import { OrderProductType } from './OrderProductType';
import { PaymentType } from './PaymentType';

export interface OrderType {
  id: number;
  date: string;
  userId: number;
  user: UsuarioModel;
  amountProducts: number;
  payment?: PaymentType;
  address?: AddressType;
  ordersProduct?: OrderProductType[];
}
