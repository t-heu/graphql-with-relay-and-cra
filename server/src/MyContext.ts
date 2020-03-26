import { Request, Response } from "express";

export interface MyContext {
  request: Request;
  response: Response;
  next: any;
  payload?: { userId: string };
}
