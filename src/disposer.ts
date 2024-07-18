import { Disposable } from './disposable';

export class Disposer implements Disposable {
  private disposeFns: VoidFunction[] = [];

  isDisposed = false;

  add = (...disposeFns: VoidFunction[]) => {
    this.disposeFns.push(...disposeFns);
  };

  dispose = () => {
    this.disposeFns.forEach((dispose) => dispose());
    this.disposeFns.length = 0;
    this.isDisposed = true;
  };
}
