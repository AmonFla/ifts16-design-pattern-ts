import { DeliveryContext } from "../DeliveryContext";
import { IPackageState } from "./IPackageState";
import { OutForDeliveryState } from "./OutForDeliveryState";

export class InTransitionState implements IPackageState {
  private static instance = new InTransitionState();

  public static getInstance(): InTransitionState {
    return this.instance;
  }

  public updateState(ctx: DeliveryContext): void {
    console.log("Package is In Transition !!");
    ctx.setCurrentState(OutForDeliveryState.getInstance());
  }
}
