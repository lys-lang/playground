import * as React from "react";
import { Editor } from "./Editor";
import { compileSources, writeFile } from "./lys/context";

const main = `
#[export]
fun main(a: i32, b: i32): i32 = {
  a + b + b
}
`;
const wat = `
;; Click in the "Compile" button to see the result here
(module
  (type $0 (func (param i32 i32) (result i32)))
  (memory $0 1)
  (export "memory" (memory $0))
  (export "main" (func $0))
  (func $0 (; 0 ;) (type $0) (param $0 i32) (param $1 i32) (result i32)
   (i32.add
    (local.get $1)
    (i32.add
     (local.get $0)
     (local.get $1)
    )
   )
  )
 ) 
`;

export default class App extends React.Component {
  constructor(a: {}, b: React.Context<any>) {
    // stub
    super(a, b);
  }

  compile = () => {
    writeFile("/out.wat", "Compiling, this may take a while...");
    setTimeout(() => compileSources(), 0);
  };

  render() {
    return (
      <div id="main">
        <div id="toolbar">
          <button onClick={this.compile}>Compile</button>
        </div>
        <div id="content">
          <div id="editor">
            <Editor language="lys" path="/main.lys" value={main} logs={[]} />
          </div>
          <div id="preview">
            <Editor language="wat" path="/out.wat" value={wat} readOnly logs={[]} />
          </div>
        </div>
      </div>
    );
  }
}
