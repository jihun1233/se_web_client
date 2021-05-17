import { rest } from 'msw';
import { menuListMock } from './menuMock';
import postListMock from './postMock';

const baseUrl = process.env.REACT_APP_API_URL;
const handlers = [
  rest.post('/test', (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  // 전체 메뉴 조회
  rest.get(`${baseUrl}/menu`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( menuListMock ));
  }),
  // postList 게시판의 게시글 목록 조회
  rest.get(`${baseUrl}/post`, (req,res,ctx)=>{
    console.log(req)
    return res(ctx.status(200), ctx.json(postListMock(req.url.searchParams.get('boardId'))));
  })
];

export default handlers;
