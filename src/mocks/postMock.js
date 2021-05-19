const contentSize = 50;
const postList=({boardId, direction, page, size}) =>{
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
          "views": 0
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
      
export default postList;