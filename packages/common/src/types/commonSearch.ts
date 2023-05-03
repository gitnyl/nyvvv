export interface Pagination {
  size: number;
  page: number;
}

export interface PaginationOption {
  totalCount: number;
  pagination: Pagination;
}

export interface Sort {
  sort: string[];
}
/**
 *-1: 미선택 0: 미사용 / 1: 사용
 */
export type UseType = -1 | 0 | 1;

/**
 * -1: 미선택 0: 미표시 / 1: 표시
 */
export type DisplayType = -1 | 0 | 1;

// TODO: 주석필요
export type UploadType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
