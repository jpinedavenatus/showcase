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
}

export { };

declare global {
    interface Window {
        __VM: any;

    }
}

export type AdProps = {
    placementName: string;
    alias?: string;
};