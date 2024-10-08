import type { IWriter, IWriterGrowable } from '@jsonjoy.com/util/lib/buffers';
import type { BinaryJsonEncoder, StreamingBinaryJsonEncoder, TlvBinaryJsonEncoder } from '../types';
import type { Slice } from '@jsonjoy.com/util/lib/buffers/Slice';
export declare class RespEncoder<W extends IWriter & IWriterGrowable = IWriter & IWriterGrowable> implements BinaryJsonEncoder, StreamingBinaryJsonEncoder, TlvBinaryJsonEncoder {
    readonly writer: W;
    constructor(writer?: W);
    encode(value: unknown): Uint8Array;
    encodeToSlice(value: unknown): Slice;
    writeAny(value: unknown): void;
    protected writeLength(length: number): void;
    encodeCmd(args: unknown[]): Uint8Array;
    writeCmd(args: unknown[]): void;
    encodeCmdUtf8(args: unknown[]): Uint8Array;
    writeCmdUtf8(args: unknown[]): void;
    writeArgUtf8(arg: unknown): void;
    writeNull(): void;
    writeNullStr(): void;
    writeNullArr(): void;
    writeBoolean(bool: boolean): void;
    writeNumber(num: number): void;
    writeBigInt(int: bigint): void;
    writeInteger(int: number): void;
    writeUInteger(uint: number): void;
    writeFloat(float: number): void;
    writeBin(buf: Uint8Array): void;
    writeBinHdr(length: number): void;
    writeStr(str: string): void;
    writeStrHdr(length: number): void;
    writeSimpleStr(str: string): void;
    writeSimpleStrAscii(str: string): void;
    writeBulkStr(str: string): void;
    writeBulkStrAscii(str: string): void;
    writeAsciiStr(str: string): void;
    writeVerbatimStr(encoding: string, str: string): void;
    writeErr(str: string): void;
    writeSimpleErr(str: string): void;
    writeBulkErr(str: string): void;
    writeArr(arr: unknown[]): void;
    writeArrHdr(length: number): void;
    writeObj(obj: Record<string, unknown>): void;
    writeObjHdr(length: number): void;
    writeAttr(obj: Record<string, unknown>): void;
    writeSet(set: Set<unknown>): void;
    writePush(elements: unknown[]): void;
    writeUnknown(value: unknown): void;
    writeUndef(): void;
    protected writeRn(): void;
    writeStartStr(): void;
    writeStrChunk(str: string): void;
    writeEndStr(): void;
    writeStartBin(): void;
    writeBinChunk(buf: Uint8Array): void;
    writeEndBin(): void;
    writeStartArr(): void;
    writeArrChunk(item: unknown): void;
    writeEndArr(): void;
    writeStartObj(): void;
    writeObjChunk(key: string, value: unknown): void;
    writeEndObj(): void;
}
