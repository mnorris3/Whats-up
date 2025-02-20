import express from 'express';
import type { Request, Response } from 'express';
import { Messages } from '../../models/index.js';

const router = express.Router();

// GET /messages - Get all messages
router.get('/:roomId', async (req: Request, res: Response) => {
  try {
    const messages = await Messages.findAll({
        where: {
            conversation_id: req.params.roomId
          }
    });
    res.json(messages);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /users/:id - Get a user by id
// router.get('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findByPk(id, {
//       attributes: { exclude: ['password'] }
//     });
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// });

// PUT /users/:id - Update a user by id
// router.put('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { username, password } = req.body;
//   try {
//     const user = await User.findByPk(id);
//     if (user) {
//       user.username = username;
//       user.password = password;
//       await user.save();
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// });

// DELETE /users/:id - Delete a user by id
// router.delete('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findByPk(id);
//     if (user) {
//       await user.destroy();
//       res.json({ message: 'User deleted' });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// });

export { router as messageRouter };
