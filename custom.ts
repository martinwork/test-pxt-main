/**
 * Main blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace testMain {
    /**
     * pow3
     * @param value describe value here, eg: 5
     */
    //% block
    export function pow3(value: number): number {
        return value * testDep.square(value);
    }
}
