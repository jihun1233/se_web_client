import { rest } from 'msw';
import { menuListMock } from './menuMock'


const baseUrl = process.env.REACT_APP_API_URL;
const handlers = [
  rest.post('/test', (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  // 전체 메뉴 조회
  rest.get(`${baseUrl}/menu`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( menuListMock ));
  }),

];

export default handlers;
