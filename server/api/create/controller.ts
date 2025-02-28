import { gameUsecase } from '$/usecase/gameusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ user }) => ({ status: 201, body: await gameUsecase.create(user.id) }),
}));
