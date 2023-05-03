export interface IPageableSort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export interface IPageable {
    sort: IPageableSort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface IPageRes<T> {
    content: T[];
    pageable: IPageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    sort: IPageableSort;
    number: number;
    numberOfElements: number;
    size: number;
    empty: boolean;
}

export interface CFile {
    uploadIdx: number;
    file: string; //file url
    thumb: string; //thumb url
    originalFileName: string;

    //for locafile
    type?: string;
    originFileObj: File;
}
