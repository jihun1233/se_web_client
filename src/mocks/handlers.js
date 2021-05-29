import { rest } from 'msw';
import { menuListMock } from './menuMock';
import {postList, postById, createPost} from './postMock';
import {loginMock} from './authMock';
import searchedTagList from './tagMock';
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
    return res(ctx.status(200), ctx.json(postList({boardId:req.url.searchParams.get('boardId'), direction:req.url.searchParams.get('direction'), page:req.url.searchParams.get('page'), size:req.url.searchParams.get('size')})));
  }),
  // 게시글 id로 조회
  rest.get(`${baseUrl}/post/:id`, (req,res,ctx)=>{
    return res(ctx.status(200), ctx.json(postById(req.url.searchParams.get('postId'))))
  }),
  rest.post(`${baseUrl}/post`, (req,res,ctx)=>{
    return res(ctx.status(200), ctx.json(createPost()))
  }),
  // AUTH
  // 로그인
  rest.post(`${baseUrl}/signin`, (req,res,ctx)=>{
    return res(ctx.status(200), ctx.json(loginMock()));
  }),
  rest.get(`${baseUrl}/tag/match/:text`, (req,res,ctx)=>{
    return res(ctx.status(200), ctx.json(searchedTagList))
  })
];

export default handlers;
