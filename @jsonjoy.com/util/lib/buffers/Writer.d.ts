import { Slice } from './Slice';
import { IWriterGrowable, IWriter } from './types';
export declare class Writer implements IWriter, IWriterGrowable {
    allocSize: number;
    uint8: Uint8Array;
    view: DataView;
    x0: number;
    x: number;
    protected size: number;
    constructor(allocSize?: number);
    protected grow(size: number): void;
    ensureCapacity(capacity: number): void;
    move(capacity: number): void;
    reset(): void;
    newBuffer(size: number): void;
    flush(): Uint8Array;
    flushSlice(): Slice;
    u8(char: number): void;
    u16(word: number): void;
    u32(dword: number): void;
    i32(dword: number): void;
    u64(qword: number | bigint): void;
    f64(float: number): void;
    u8u16(u8: number, u16: number): void;
    u8u32(u8: number, u32: number): void;
    u8u64(u8: number, u64: number | bigint): void;
    u8f32(u8: number, f32: number): void;
    u8f64(u8: number, f64: number): void;
    buf(buf: Uint8Array, length: number): void;
    utf8(str: string): number;
    utf8Native(str: string): number;
    ascii(str: string): void;
}
