import React from "react";

interface CursorOuterProps {
    style: React.CSSProperties;
    outerRef: React.RefObject<HTMLDivElement>;
}

const CursorOuter: React.FC<CursorOuterProps> = ({ style, outerRef }) => {
    return (
        <div
            ref={outerRef}
            style={style}
            aria-hidden="true"
            data-cursor="outer"
        />
    );
};

export default React.memo(CursorOuter);
