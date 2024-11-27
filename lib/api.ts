export interface ResponseCode {
  code: number
  message: string
  imageUrl: string
}

const responseCodes: ResponseCode[] = [
  { code: 100, message: "Continue", imageUrl: "https://http.dog/100.jpg" },
  { code: 101, message: "Switching Protocols", imageUrl: "https://http.dog/101.jpg" },
  { code: 102, message: "Processing", imageUrl: "https://http.dog/102.jpg" },
  { code: 103, message: "Early Hints", imageUrl: "https://http.dog/103.jpg" },
  { code: 200, message: "OK", imageUrl: "https://http.dog/200.jpg" },
  { code: 201, message: "Created", imageUrl: "https://http.dog/201.jpg" },
  { code: 202, message: "Accepted", imageUrl: "https://http.dog/202.jpg" },
  { code: 203, message: "Non-Authoritative Information", imageUrl: "https://http.dog/203.jpg" },
  { code: 204, message: "No Content", imageUrl: "https://http.dog/204.jpg" },
  { code: 206, message: "Partial Content", imageUrl: "https://http.dog/206.jpg" },
  { code: 207, message: "Multi-Status", imageUrl: "https://http.dog/207.jpg" },
  { code: 300, message: "Multiple Choices", imageUrl: "https://http.dog/300.jpg" },
  { code: 301, message: "Moved Permanently", imageUrl: "https://http.dog/301.jpg" },
  { code: 302, message: "Found", imageUrl: "https://http.dog/302.jpg" },
  { code: 303, message: "See Other", imageUrl: "https://http.dog/303.jpg" },
  { code: 304, message: "Not Modified", imageUrl: "https://http.dog/304.jpg" },
  { code: 305, message: "Use Proxy", imageUrl: "https://http.dog/305.jpg" },
  { code: 307, message: "Temporary Redirect", imageUrl: "https://http.dog/307.jpg" },
  { code: 308, message: "Permanent Redirect", imageUrl: "https://http.dog/308.jpg" },
  { code: 400, message: "Bad Request", imageUrl: "https://http.dog/400.jpg" },
  { code: 401, message: "Unauthorized", imageUrl: "https://http.dog/401.jpg" },
  { code: 402, message: "Payment Required", imageUrl: "https://http.dog/402.jpg" },
  { code: 403, message: "Forbidden", imageUrl: "https://http.dog/403.jpg" },
  { code: 404, message: "Not Found", imageUrl: "https://http.dog/404.jpg" },
  { code: 405, message: "Method Not Allowed", imageUrl: "https://http.dog/405.jpg" },
  { code: 406, message: "Not Acceptable", imageUrl: "https://http.dog/406.jpg" },
  { code: 407, message: "Proxy Authentication Required", imageUrl: "https://http.dog/407.jpg" },
  { code: 408, message: "Request Timeout", imageUrl: "https://http.dog/408.jpg" },
  { code: 409, message: "Conflict", imageUrl: "https://http.dog/409.jpg" },
  { code: 410, message: "Gone", imageUrl: "https://http.dog/410.jpg" },
  { code: 411, message: "Length Required", imageUrl: "https://http.dog/411.jpg" },
  { code: 412, message: "Precondition Failed", imageUrl: "https://http.dog/412.jpg" },
  { code: 413, message: "Payload Too Large", imageUrl: "https://http.dog/413.jpg" },
  { code: 414, message: "URI Too Long", imageUrl: "https://http.dog/414.jpg" },
  { code: 415, message: "Unsupported Media Type", imageUrl: "https://http.dog/415.jpg" },
  { code: 416, message: "Range Not Satisfiable", imageUrl: "https://http.dog/416.jpg" },
  { code: 417, message: "Expectation Failed", imageUrl: "https://http.dog/417.jpg" },
  { code: 418, message: "I'm a teapot", imageUrl: "https://http.dog/418.jpg" },
  { code: 420, message: "Enhance Your Calm", imageUrl: "https://http.dog/420.jpg" },
  { code: 421, message: "Misdirected Request", imageUrl: "https://http.dog/421.jpg" },
  { code: 422, message: "Unprocessable Entity", imageUrl: "https://http.dog/422.jpg" },
  { code: 423, message: "Locked", imageUrl: "https://http.dog/423.jpg" },
  { code: 424, message: "Failed Dependency", imageUrl: "https://http.dog/424.jpg" },
  { code: 425, message: "Too Early", imageUrl: "https://http.dog/425.jpg" },
  { code: 426, message: "Upgrade Required", imageUrl: "https://http.dog/426.jpg" },
  { code: 429, message: "Too Many Requests", imageUrl: "https://http.dog/429.jpg" },
  { code: 431, message: "Request Header Fields Too Large", imageUrl: "https://http.dog/431.jpg" },
  { code: 444, message: "No Response", imageUrl: "https://http.dog/444.jpg" },
  { code: 450, message: "Blocked By Windows Parental Controls", imageUrl: "https://http.dog/450.jpg" },
  { code: 451, message: "Unavailable For Legal Reasons", imageUrl: "https://http.dog/451.jpg" },
  { code: 497, message: "HTTP Request Sent to HTTPS Port", imageUrl: "https://http.dog/497.jpg" },
  { code: 498, message: "Invalid Token", imageUrl: "https://http.dog/498.jpg" },
  { code: 499, message: "Client Closed Request", imageUrl: "https://http.dog/499.jpg" },
  { code: 500, message: "Internal Server Error", imageUrl: "https://http.dog/500.jpg" },
  { code: 501, message: "Not Implemented", imageUrl: "https://http.dog/501.jpg" },
  { code: 502, message: "Bad Gateway", imageUrl: "https://http.dog/502.jpg" },
  { code: 503, message: "Service Unavailable", imageUrl: "https://http.dog/503.jpg" },
  { code: 504, message: "Gateway Timeout", imageUrl: "https://http.dog/504.jpg" },
  { code: 506, message: "Variant Also Negotiates", imageUrl: "https://http.dog/506.jpg" },
  { code: 507, message: "Insufficient Storage", imageUrl: "https://http.dog/507.jpg" },
  { code: 508, message: "Loop Detected", imageUrl: "https://http.dog/508.jpg" },
  { code: 509, message: "Bandwidth Limit Exceeded", imageUrl: "https://http.dog/509.jpg" },
  { code: 510, message: "Not Extended", imageUrl: "https://http.dog/510.jpg" },
  { code: 511, message: "Network Authentication Required", imageUrl: "https://http.dog/511.jpg" },
  { code: 521, message: "Web Server Is Down", imageUrl: "https://http.dog/521.jpg" },
  { code: 523, message: "Origin Is Unreachable", imageUrl: "https://http.dog/523.jpg" },
  { code: 525, message: "SSL Handshake Failed", imageUrl: "https://http.dog/525.jpg" },
  { code: 599, message: "Network Connect Timeout Error", imageUrl: "https://http.dog/599.jpg" }
]

export function getResponseCodes(filter: string): ResponseCode[] {
  const regex = new RegExp(`^${filter.replace(/x/g, '\\d')}`)
  return responseCodes.filter(code => regex.test(code.code.toString()))
}

export interface SavedList {
  id: string
  name: string
  creationDate: string
  codes: ResponseCode[]
}

export function getSavedLists(): SavedList[] {
  const lists = localStorage.getItem('savedLists')
  return lists ? JSON.parse(lists) : []
}

export function saveList(list: Omit<SavedList, 'id'>): void {
  const lists = getSavedLists()
  const newList = { ...list, id: Date.now().toString() }
  lists.push(newList)
  localStorage.setItem('savedLists', JSON.stringify(lists))
}

export function updateList(updatedList: SavedList): void {
  const lists = getSavedLists()
  const index = lists.findIndex(list => list.id === updatedList.id)
  if (index !== -1) {
    lists[index] = updatedList
    localStorage.setItem('savedLists', JSON.stringify(lists))
  }
}

export function deleteList(id: string): void {
  const lists = getSavedLists()
  const updatedLists = lists.filter(list => list.id !== id)
  localStorage.setItem('savedLists', JSON.stringify(updatedLists))
}

