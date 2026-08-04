/**
 * Declare SCSS files as modules so we can import them into TS files and use their content
 */
declare module '*.scss'
{
    const content: { [className: string]: string };
    export = content;
}

declare module 'canvas-confetti' {
    type ConfettiOptions = {
        angle?: number;
        spread?: number;
        startVelocity?: number;
        element?: HTMLElement | string;
        width?: number;
        height?: number;
        duration?: number;
        ticks?: number;
        gravity?: number;
        drift?: number;
        colors?: string[];
        scalar?: number;
        shapes?: string[];
        origin?: {
            x?: number;
            y?: number;
        };
        [key: string]: any;
    };

    interface ConfettiAPI {
        (options?: ConfettiOptions): void;
        create?: (element: HTMLElement | string, options?: ConfettiOptions) => ConfettiAPI;
        reset?: () => void;
        promise?: (options?: ConfettiOptions) => Promise<void>;
    }

    const confetti: ConfettiAPI;
    export default confetti;
}
