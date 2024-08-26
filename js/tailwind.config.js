tailwind.config = {
    theme: {
      extend: {
          // color part start 
          colors: {
              headercolor: '#160C6D',
              btncolor: '#1BBF00',
             countercolor: '#F9F9FB',
            },
            // color part end 
            // container part start 
            maxWidth: {
            headercontainer: '1170px',
            bannercontainer: '962px',
              },
            // container part end 
            // font family start 
            fontFamily: {
                open: ['Open Sans'],
                paprika: ['Paprika'],

              },
            // font family end
            // backround images start 
            backgroundImage: {
                bannerimage: "url('./images/banner.png')",
              }
            // backround images End
      }
    }
  }
