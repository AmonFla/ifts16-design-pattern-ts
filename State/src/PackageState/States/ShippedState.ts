import { DeliveryContext } from "../DeliveryContext";
import { InTransitionState } from "./InTransitionState";
import { IPackageState } from "./IPackageState";

export class ShippedState implements IPackageState {
  private static instance = new ShippedState();

  public static getInstance(): ShippedState {
    return this.instance;
  }

  public updateState(ctx: DeliveryContext): void {
    console.log("Package is Shipped !!");
    ctx.setCurrentState(InTransitionState.getInstance());
  }
}
