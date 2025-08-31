import React from "react";

interface CursorInnerProps {
    style: React.CSSProperties;
    innerRef: React.RefObject<HTMLDivElement>;
}

const CursorInner: React.FC<CursorInnerProps> = ({ style, innerRef }) => {
    return (
        <div
            ref={innerRef}
            style={style}
            aria-hidden="true"
            data-cursor="inner"
        />
    );
};

export default React.memo(CursorInner);
