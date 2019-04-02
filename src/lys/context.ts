import { compile, ParsingContext } from "lys-compiler";
import { monacoSystem, getModel } from "../monaco";

export function writeFile(path: string, content: string) {
  const model = getModel(path);
  model.setValue(content);
}

export function compileSources() {
  const parsingContext = new ParsingContext(monacoSystem);

  try {
    const ret = compile(parsingContext, "/main.lys");
    ret.validate(true, true);
    writeFile("/out.wat", ret.emitText());
    console.dir(ret);
    return ret;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
