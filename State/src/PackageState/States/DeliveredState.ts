import { DeliveryContext } from "../DeliveryContext";
import { IPackageState } from "./IPackageState";

export class DeliveredState implements IPackageState {
  private static instance = new DeliveredState();

  public static getInstance(): DeliveredState {
    return this.instance;
  }

  public updateState(ctx: DeliveryContext): void {
    console.log("Package is Delivered !!");
  }
}
