export interface BuildOptions {
  paths: BuildPaths,
  port: number
}

export interface BuildPaths {
  entry: string,
  build: string,
  html: string
}