import { Children } from "../../types/Children";

export function PageContent({children}: {children: Children}) {
    return <div className="page__wrapper">
        <div className="page__center">{children}</div>
    </div>

}