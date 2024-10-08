import type { Brand } from '../types';
export type JavaScript<T> = Brand<string, T, 'JavaScript'>;
export type JavaScriptClosure<Js, D extends unknown[] = unknown[]> = JavaScript<(...deps: D) => Js>;
export interface JavaScriptLinked<Js, Dependencies extends unknown[] = unknown[]> {
    deps: Dependencies;
    js: JavaScriptClosure<Js, Dependencies>;
}
