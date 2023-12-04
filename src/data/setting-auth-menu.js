

export const MENU_ITEMS = 
    {
      youtuber :  [
          {
            key:'ads',
            url : '/setting/ads',
            label : "광고 관리",
            menus : [
              { path: '/waiting', name: '대기 광고' },
              { path: '/progress', name: '진행 광고' },
              { path: '/past', name: '종료 광고' },
              { path: '/bookmark', name: '찜한 광고' },
  
            ]
          },
          {
            key:'user',
            url : '/setting',
            label : "정보 관리",
            menus :[
              { path: '/profile', name: '회원정보' },
              { path: '/secession', name: '회원 탈퇴' },
            ]
          },
        ],
        advertisement :  [
            {
              key:'ads',
              url : '/setting/partner/ads',
              label : "광고 관리",
              menus : [
                { path: '/waiting', name: '등록 광고' },
                { path: '/progress', name: '진행 광고' },
                { path: '/past', name: '종료 광고' },
    
              ]
            },
            {
              key:'user',
              url : '/setting',
              label : "정보 관리",
              menus :[
                { path: '/profile', name: '회원정보' },
                { path: '/secession', name: '회원 탈퇴' },
              ]
            },
          ]
    }

  

  
