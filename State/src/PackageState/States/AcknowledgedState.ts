import { DeliveryContext } from "../DeliveryContext";
import { IPackageState } from "./IPackageState";
import { ShippedState } from "./ShippedState";

export class AcknowledgedState implements IPackageState {
  private static instance = new AcknowledgedState();

  public static getInstance(): AcknowledgedState {
    return this.instance;
  }

  public updateState(ctx: DeliveryContext): void {
    console.log("Package is Acknowledge !!");
    ctx.setCurrentState(ShippedState.getInstance());
  }
}
