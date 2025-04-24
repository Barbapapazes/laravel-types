export interface Resource<T> {
  data: T
}

export interface ResourceCollection<T> {
  data: T[]
}

export interface PaginatedResourceCollectionLinks {
  first: string
  last: string
  next?: string
  prev?: string
}

export interface PaginatedResourceCollectionMeta {
  current_page: number
  from?: number
  last_page: number
  links: {
    active: boolean
    label: string
    url?: string
  }[]
  path: string
  per_page: number
  to?: number
  total: number
}

export interface PaginatedResourceCollection<T> {
  data: T[]

  links: PaginatedResourceCollectionLinks
  meta: PaginatedResourceCollectionMeta
};

export default {}
