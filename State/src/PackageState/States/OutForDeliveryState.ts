import { DeliveredState } from "./DeliveredState";
import { DeliveryContext } from "../DeliveryContext";
import { IPackageState } from "./IPackageState";

export class OutForDeliveryState implements IPackageState {
  private static instance = new OutForDeliveryState();

  public static getInstance(): OutForDeliveryState {
    return this.instance;
  }

  public updateState(ctx: DeliveryContext): void {
    console.log("Package is Out For Delivery !!");
    ctx.setCurrentState(DeliveredState.getInstance());
  }
}
