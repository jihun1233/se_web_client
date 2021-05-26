export const postList=({boardId, direction, page, size}) =>{
  const contentSize = size || 30;
  const content = [];
  for (let index = 0; index < contentSize; index++) {
        content.push({
          "boardId": boardId,
          "createAt": "2021-05-16T15:03:49.183Z",
          "isNotice": "NORMAL",
          "isSecret": "NORMAL",
          "nickname": `${index} 작성자`,
          "numReply": 0,
          "postId": index,
          "previewText": "string",
          "title": `${boardId}의 ${index}번 게시글`,
          "views": 0,
          tags: [{
            tagId:1,
            tag:'4학년'
          },{
            tagId:2,
            tag:'창의융합프로젝트2'
          },{
            tagId:3,
            tag:'1학년'
          },{
            tagId:4,
            tag:'2학년'
          },{
            tagId:5,
            tag:'3학년'
          }
        ]
        })
              
  }
    return {
        "code": 200,
        "data": {
          "content": content,
          "empty": false,
          "first": true,
          "last": false,
          "number": 0,
          "numberOfElements": 0,
          "pageable": {
            "offset": 0,
            "pageNumber": page,
            "pageSize": 50,
            "paged": true,
            "sort": {
              "empty": true,
              "sorted": true,
              "unsorted": true
            },
            "unpaged": false
          },
          "size": 0,
          "sort": {
            "empty": true,
            "sorted": true,
            "unsorted": true
          },
          "totalElements": 100,
          "totalPages": 99
        },
        "message": "string"
      }
      
    }
      
export const postById = (postId) => {
  return {
    "code": 201,
    "message": "성공적으로 조회되었습니다",
    "data": {
      "postId": postId,
      "boardId": 1,
      "views": 0,
      "isSecret": "NORMAL",
      "isNotice": "NORMAL",
      "anonymousNickname": "string",
      "postContent": {
        "title": "string",
        "text": `<p>원작&nbsp;&lt;어린&nbsp;왕자&gt;는&nbsp;전세계&nbsp;독자들에게&nbsp;기억&nbsp;속&nbsp;이야기를&nbsp;너머&nbsp;하나의&nbsp;체화된&nbsp;전설로&nbsp;자리잡고&nbsp;있다.&nbsp;주인공&nbsp;어린&nbsp;왕자의&nbsp;언어와&nbsp;행동은&nbsp;동심과&nbsp;유년의&nbsp;순수함으로&nbsp;어른들의&nbsp;세계를&nbsp;투명하게&nbsp;비춰준다.&nbsp;1943년&nbsp;출간&nbsp;후&nbsp;어른들을&nbsp;위한&nbsp;동화이자&nbsp;세계적&nbsp;고전으로&nbsp;자리잡으면서&nbsp;대체&nbsp;불가,&nbsp;설명&nbsp;불가,&nbsp;해석&nbsp;불가한&nbsp;이야기로&nbsp;독자들의&nbsp;사랑을&nbsp;꾸준히&nbsp;받고&nbsp;있다.</p><p><br>&nbsp;</p><p>사투리로&nbsp;재해석한&nbsp;&lt;애린&nbsp;왕자&gt;는&nbsp;언어&nbsp;실험의&nbsp;일환으로&nbsp;세월에&nbsp;엷어지는&nbsp;동심을&nbsp;소환하는&nbsp;새로운&nbsp;형식을&nbsp;보여준다.&nbsp;역자는&nbsp;원작의&nbsp;감동을&nbsp;전달하기&nbsp;위해&nbsp;언어&nbsp;너머&nbsp;프랑스어와&nbsp;영어,&nbsp;표준어를&nbsp;거쳐&nbsp;오롯이&nbsp;경상도&nbsp;사투리로&nbsp;원문을&nbsp;담았고&nbsp;이&nbsp;과정에서&nbsp;지역&nbsp;정서가&nbsp;녹아든&nbsp;개성&nbsp;있는&nbsp;동심을&nbsp;정감&nbsp;넘치는&nbsp;사투리로&nbsp;만날&nbsp;수&nbsp;있다.&nbsp;또&nbsp;발음에&nbsp;충실한&nbsp;사투리&nbsp;표기로&nbsp;맞춤법을&nbsp;깨트리는&nbsp;일탈과&nbsp;재미도&nbsp;만끽할&nbsp;수&nbsp;있다.</p><p><br>&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P.&nbsp;27</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;마흔네번&nbsp;해넘이&nbsp;본&nbsp;날에,&nbsp;니는&nbsp;그마이&nbsp;슬펐단&nbsp;말이가?&nbsp;-&nbsp;HIREN</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P.&nbsp;33</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;내가&nbsp;눈치&nbsp;없그로&nbsp;어설픈&nbsp;거짓말&nbsp;뒤에&nbsp;숨기&nbsp;노은&nbsp;진짜&nbsp;맘을&nbsp;몰라준기라.&nbsp;모순&nbsp;뭉티,&nbsp;사랑하기엔&nbsp;내가&nbsp;그&nbsp;때&nbsp;너무&nbsp;애렸덩기라......&nbsp;-&nbsp;HIREN</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P.&nbsp;27</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;쪼매한&nbsp;니&nbsp;별에는&nbsp;의자&nbsp;좀&nbsp;땡기앉으모&nbsp;될&nbsp;낀데.&nbsp;그래가꼬&nbsp;니가&nbsp;보고&nbsp;싶을&nbsp;때마다&nbsp;저무는&nbsp;노을을&nbsp;바라밨자나…</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;˝한&nbsp;날은&nbsp;마흔네&nbsp;번이나&nbsp;해넘이를&nbsp;봤다아잉교!˝</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그라고&nbsp;이켔제.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;˝아제도&nbsp;알끄다……&nbsp;그래&nbsp;슬프모&nbsp;누구든동&nbsp;노을이&nbsp;보고싶은기다.˝</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;마흔네번&nbsp;해넘이&nbsp;본&nbsp;날에,&nbsp;니는&nbsp;그마이&nbsp;슬펐단&nbsp;말이가?&nbsp;애린&nbsp;왕자는&nbsp;대답을&nbsp;안했따.</p>`
      },
      "createdAt": [
        2021,
        5,
        20,
        9,
        57,
        33,
        718305000
      ],
      "attaches": [],
      "tags": [{
          tagId:1,
          tag:'4학년'
        },{
          tagId:2,
          tag:'창의융합프로젝트2'
        },{
          tagId:3,
          tag:'1학년'
        },{
          tagId:4,
          tag:'2학년'
        },{
          tagId:5,
          tag:'3학년'
        }
      ]
    }
  }
}
let index = 0;

export const createPost =()=>({
  "code": 201,
  "message": `성공적으로 등록되었습니다`,
  "data": index++
})
