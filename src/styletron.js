import { Client as StyletronClient } from "styletron-engine-atomic";
import { Server as StyletronServer } from "styletron-engine-atomic";

export const isServer = typeof window === "undefined";

export const styletron = isServer
  ? new StyletronServer()
  : new StyletronClient();
