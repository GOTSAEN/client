export function ApiResponse(response) {
  const status = response.status
  switch (status) {
    case 200:
      return new Response({
        status,
        data: response.data ? response.data : '성공',
      })
    case 201:
      return new Response({})
    case 401:
      console.log('여기서 끝나')
      return new Error({
        status: 401,
        data: '입력한 정보로 등록된 회원정보가 존재하지 않습니다',
      })
    default:
      break
  }
}

export function ErrorResponse(error) {
  const status = error.response.status
  switch (status) {
    case 409:
      return new Error({
        ...error.response.data,
      })
    default:
      return new Error({
        status: 500,
        message: '알수 없는 오류가 발생했습니다.',
      })
  }
}
