[![npm](https://img.shields.io/npm/v/mobx-disposer-util)](https://www.npmjs.com/package/mobx-disposer-util) 
[![license](https://img.shields.io/npm/l/mobx-disposer-util)](https://github.com/js2me/mobx-disposer-util/blob/master/LICENSE)  


> [!WARNING]  
> It's fine if you use this library from NPM package with a **static versioning** in case you
> want it for some pet-project or to test it's capabilities.
>
> But for production use it's **strongly recommended** to create a fork, because I do not write
> Changelogs and may break / add some functionality without notice.  

# mobx-disposer-util  

Disposer class and Disposable interface  

## usage  

```ts
import { Disposable, Disposer } from "mobx-disposer-util";


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