export enum LogLevel {
  ERROR = "ERROR",
  WARNING = "WARNING",
  MESSAGE = "MESSAGE"
}

export type Problem = {
  type: string;
  level: LogLevel;
  message: string;
  path: string;
  start: number;
  end: number;
};

export type LogState = Array<Problem>;
