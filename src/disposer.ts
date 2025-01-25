import { LinkedAbortController } from 'linked-abort-controller';
import { Disposable } from './disposable';

export interface IDisposer extends Disposable {
  isDisposed: boolean;
  add(...disposeFns: VoidFunction[]): void;
}

export class Disposer implements IDisposer {
  protected abortController: AbortController

  signal: AbortSignal

  constructor(...signals: ConstructorParameters<typeof LinkedAbortController>) {
    this.abortController = new LinkedAbortController(...signals);
    this.signal = this.abortController.signal; 
  }

  protected disposeFns: VoidFunction[] = [];

  public isDisposed = false;

  public add = (...disposeFns: VoidFunction[]) => {
    this.disposeFns.push(...disposeFns);
  };

  public dispose = () => {
    this.disposeFns.forEach((dispose) => dispose());
    this.disposeFns.length = 0;
    this.isDisposed = true;
    this.abortController.abort(); 
  };
}
