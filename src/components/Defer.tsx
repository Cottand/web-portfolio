import React, {FC, ReactNode, useMemo} from "react";

export const Defer: FC<{ chunkSize: number, children: ReactNode }> = ({chunkSize, children}) => {
    const [renderedItemsCount, setRenderedItemsCount] = React.useState(chunkSize);

    const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

    React.useEffect(() => {
        if (renderedItemsCount < childrenArray.length) {
            window.requestIdleCallback(
                () => {
                    setRenderedItemsCount(
                        Math.min(renderedItemsCount + chunkSize, childrenArray.length)
                    );
                },
                {timeout: 200}
            );
        }
    }, [renderedItemsCount, childrenArray.length, chunkSize]);

    const slice = childrenArray.slice(0, renderedItemsCount)
    return <>{slice}</>;
};
