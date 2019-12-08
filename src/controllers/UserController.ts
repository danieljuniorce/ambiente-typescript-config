import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response) :Promise<Response> {
    const user = await User.find()

    return res.status(200).json(user)
  }

  public async create (req: Request, res: Response) :Promise<Response> {
    const user = await User.create(req.body)
    return res.json(user)
  }
}

export default new UserController()
