type Header = {
  key: string
}

type Options = {
  headers?: Header[],
  data?: BodyInit
}
type FetchProps = {
  url: string,
  method: string,
  opts: Options,
}

export type {Header, Options, FetchProps};