export interface BuildOptions {
  paths: BuildPaths,
  port: number,
  mode: BuildMode,
  isDev: boolean,
}

export interface BuildPaths {
  entry: string,
  build: string,
  html: string,
  src: string
}

type BuildMode = "production" | "development"

export interface BuildEnv {
  MODE: BuildMode,
  PORT: number
}