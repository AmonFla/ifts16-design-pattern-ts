import { DeliveryContext } from "../DeliveryContext";

export interface IPackageState {
  updateState(ctx: DeliveryContext): void;
}
