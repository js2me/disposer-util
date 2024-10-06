# disposer-util  

Disposer class and Disposable interface  

## usage  

```ts
import { Disposable, Disposer } from "disposer-util";


export class SomeModel implements Disposable {
  private disposer = new Disposer();

  constructor(){
    this.disposer.add(
      reaction(() => this.someProp, console.log)
    );
  }


  dispose() {
    this.disposer.dispose();
  }
}

```