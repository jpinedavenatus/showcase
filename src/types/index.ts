import { Dispatch, SetStateAction } from "react";;

export type TMenu = {
    category: string;
    collapseLabel: string;
    expandLabel: string;
    subPages: ISubPages[]
};
export interface ISubPages {
    name: string;
    image: string;
    pageId: string;
    path: string;
}


export interface IPageProps {
    setPage: Dispatch<SetStateAction<string>>;
    currentPage: string;
    setPageHeader?: Dispatch<SetStateAction<string>>;
    pageHeader?: string;
}

export { };

export type AdProps = {
    placementName: string;
    alias?: string;
};