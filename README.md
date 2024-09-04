[![npm](https://img.shields.io/npm/v/disposer-util)](https://www.npmjs.com/package/disposer-util) 
[![license](https://img.shields.io/npm/l/disposer-util)](https://github.com/js2me/disposer-util/blob/master/LICENSE)  

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