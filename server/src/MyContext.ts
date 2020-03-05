import { Request, Response } from "express";

export interface MyContext {
  req: Request;
  res: Response;
  next: any;
  payload?: { userId: string };
}
