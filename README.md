# Laravel Types

> [NOTE]
> This package is currently under active development. Community contributions are welcome—please open an issue or submit a pull request if you have suggestions or improvements.

Laravel Types is a lightweight JavaScript utility that enhances the developer experience by providing precise type definitions for common Laravel objects. It is especially useful for TypeScript users, Inertia integration, or working with Laravel API responses.

## API Documentation

### Interfaces

#### `Resource<T>`

Represents a single resource object.

```ts
interface Resource<T> {
  data: T
}
```

- **`data`**: The resource data of type `T`.

#### `ResourceCollection<T>`

Represents a collection of resource objects.

```ts
interface ResourceCollection<T> {
  data: T[]
}
```

- **`data`**: An array of resource data of type `T`.

#### `PaginatedResourceCollection<T>`

Represents a paginated collection of resource objects.

```ts
interface PaginatedResourceCollection<T> {
  data: T[]

  links: {
    first: string
    last: string
    next?: string
    prev?: string
  }

  meta: {
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
}
```

- **`data`**: An array of resource data of type `T`.
- **`links`**: Pagination links.
  - **`first`**: URL of the first page.
  - **`last`**: URL of the last page.
  - **`next`** *(optional)*: URL of the next page.
  - **`prev`** *(optional)*: URL of the previous page.
- **`meta`**: Metadata about the pagination.
  - **`current_page`**: The current page number.
  - **`from`** *(optional)*: The starting index of the current page.
  - **`last_page`**: The last page number.
  - **`links`**: An array of link objects.
    - **`active`**: Whether the link is active.
    - **`label`**: The label for the link.
    - **`url`** *(optional)*: The URL for the link.
  - **`path`**: The base path for the pagination.
  - **`per_page`**: The number of items per page.
  - **`to`** *(optional)*: The ending index of the current page.
  - **`total`**: The total number of items.
