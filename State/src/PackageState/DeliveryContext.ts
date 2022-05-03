import { throws } from "assert";
import { AcknowledgedState } from "./States/AcknowledgedState";
import { IPackageState } from "./States/IPackageState";

export class DeliveryContext {
  private currentState: IPackageState;
  private packageId: string;

  public constructor(
    packageId: string,
    currentState: IPackageState | undefined = undefined
  ) {
    this.packageId = packageId;
    if (!currentState) {
      this.currentState = AcknowledgedState.getInstance();
    } else {
      this.currentState = currentState;
    }
  }

  public getCurrentState(): IPackageState {
    return this.currentState;
  }

  public setCurrentState(currentState: IPackageState) {
    this.currentState = currentState;
  }

  public getPackageId(): string {
    return this.packageId;
  }

  public setPackageId(id: string) {
    this.packageId = id;
  }

  public update() {
    this.currentState.updateState(this);
  }
}
