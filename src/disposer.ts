import { Disposable } from './disposable';

export class Disposer implements Disposable {
  protected disposeFns: VoidFunction[] = [] as VoidFunction[];

  public isDisposed = false;

  public add = (...disposeFns: VoidFunction[]) => {
    this.disposeFns.push(...disposeFns);
  };

  public dispose = () => {
    this.disposeFns.forEach((dispose) => dispose());
    this.disposeFns.length = 0;
    this.isDisposed = true;
  };
}
