import { useState, useRef, useCallback, useEffect } from "react";
import { PositionType } from "../types/cursor-type";

export const useCursor = (trailingSpeed: number, innerSize: number, outerSize: number) => {
    const [mousePosition, setMousePosition] = useState<PositionType>({ x: 0, y: 0 });
    const [outerPosition, setOuterPosition] = useState<PositionType>({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorOuterRef = useRef<HTMLDivElement>(null);
    const cursorInnerRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number>();

    const calculateBoundedPosition = useCallback(
        (targetX: number, targetY: number, elementSize: number): PositionType => {
            const { innerWidth, innerHeight } = window;
            return {
                x: Math.max(0, Math.min(targetX - elementSize / 2, innerWidth - elementSize)),
                y: Math.max(0, Math.min(targetY - elementSize / 2, innerHeight - elementSize)),
            };
        },
        []
    );

    const animateCursor = useCallback(() => {
        const outerElement = cursorOuterRef.current;
        const innerElement = cursorInnerRef.current;
        if (!outerElement || !innerElement) {
            animationFrameRef.current = requestAnimationFrame(animateCursor);
            return;
        }

        const innerTarget = calculateBoundedPosition(mousePosition.x, mousePosition.y, innerSize);
        const outerTarget = calculateBoundedPosition(mousePosition.x, mousePosition.y, outerSize);

        const newOuterX = outerPosition.x + (outerTarget.x - outerPosition.x) / trailingSpeed;
        const newOuterY = outerPosition.y + (outerTarget.y - outerPosition.y) / trailingSpeed;

        setOuterPosition({ x: newOuterX, y: newOuterY });

        innerElement.style.transform = `translate3d(${innerTarget.x}px, ${innerTarget.y}px, 0)`;
        outerElement.style.transform = `translate3d(${newOuterX}px, ${newOuterY}px, 0)`;

        animationFrameRef.current = requestAnimationFrame(animateCursor);
    }, [mousePosition, outerPosition, calculateBoundedPosition, innerSize, outerSize, trailingSpeed]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
        document.addEventListener("mousemove", handleMouseMove);
        setIsVisible(true);
        animationFrameRef.current = requestAnimationFrame(animateCursor);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [animateCursor]);

    return { cursorOuterRef, cursorInnerRef, isVisible, isHovering };
};
