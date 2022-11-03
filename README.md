# Gatsby Blog

## Giới thiệu

- Gatsby là một thư viện được build trên bằng cách dùng React. Điểm mạnh của nó là chúng ta có thể SSG (Static Site Generator) về phần này NextJs cũng có các bạn có thể tìm hiểu thêm. SSG nghĩa là website sẽ build ra html 1 số phần không thay đổi trước lúc build time khi người dùng truy cập trang website thì sẽ gửi html đã được build sẵn từ trên server về giúp tiết kiệm thời gian chờ.

- Đối với Gatsby nó sẽ split code ứng dụng ra, nếu chúng ta sử dụng React bằng CRA (Create React App) thì chúng ta phải download toàn bộ js cũng như là index.html rỗng về rồi client phải build đóng code đó để render ra layout thì đối với Gatsby cần gì gửi đó

VD Bạn vào homepage nó sẽ chỉ gửi index.html đã được build sẵn + json + js của page đó

- Điểm mạnh của Gatsby là sử dụng GraphQL, nếu bạn dùng full BE và FE là GraphQL thì cực kì tuyệt. Còn lại nếu SSR thì mình nghĩ NextJS vẫn là tốt nhất hiện tại.

## So sánh React, NextJs, Gatsby

- Nếu bạn sử dụng React thì chắc chắn SEO của bạn sẽ không tốt, nhưng build dc úng dụng nhỏ gọn và nhanh chóng SPA. Làm Admin nhỏ nhỏ không thể làm blog, news,...

- Gatsby là thư viện bạn vừa build dc tốt cho SEO, cũng như SPA bình thường. Có nhìu plugins hỗ trợ. Theo cá nhân mình nếu làm blog nhỏ thì khá là ok. Nhưng config thì khá là nhiều để học. Còn nhiều thứ mà bạn cần học để vào. Nhưng mà BE nên có GraphQL code nó dui dẻ.

- NextJS thì làm SEO tốt, nó có CSR, SSR, SSG, ISG,... Và bản V13 còn có cả cache. Dễ dùng dễ xài và dễ học

## Link lúc code

Mình không dùng cái này chia route thay vào đó là File System API của nó luôn

https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/
https://stackoverflow.com/questions/67538680/error-instaling-reach-router-with-react-v17

## Bạn có thể dùng này để chia route dynamic vẫn ok luôn. Cái này thì k có SSG

https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/#creating-client-only-routes

- Demo thì mình vào http://localhost:8000/csr-blog/605360bbce93e1003bd6ddd5

## Hiện tại mình mún dynamic nhưng mà SSG thì dùng link cái này

https://www.gatsbyjs.com/docs/how-to/querying-data/using-gatsby-without-graphql/

## Redux trong Gatsby

https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux

## Hình ảnh SSG 1 số page

![alt](./docs/Screenshot%202022-11-03%20142056.png)

![alt](./docs/Screenshot%202022-11-03%20142458.png)

![alt](./docs/Screenshot%202022-11-03%20142512.png)

![alt](./docs/Screenshot%202022-11-03%20142558.png)

## Cách mình learn cái này

Join cái tutorial này là ok.

https://www.gatsbyjs.com/docs/tutorial/
