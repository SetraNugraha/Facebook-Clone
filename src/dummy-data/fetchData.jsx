/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

// Example Post Long Text
const textPost1 = () => {
  return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatem nesciunt, magnam adipisci ipsum veniam unde est quia iste temporibus provident commodi rerum suscipit, rem accusantium qui incidunt debitis consequuntur reiciendis dolorem! Voluptas harum ea, expedita, nulla corrupti temporibus odio molestias corporis maiores reiciendis quaerat quasi excepturi atque ratione voluptatibus perspiciatis? Ipsum dolor sed accusantium quisquam corporis quae ratione, corrupti sit dolorem et consectetur consequatur mollitia similique nemo quo ea soluta. Exercitationem aspernatur molestias magnam voluptate voluptas molestiae nobis sapiente dignissimos nulla repudiandae? Aliquid adipisci impedit, quasi placeat necessitatibus optio. Ad quas quam excepturi! Totam fuga voluptate, sequi quaerat error labore. Ipsam qui esse placeat sit quam ipsum veritatis saepe, doloribus porro molestiae voluptatibus ad id ipsa? Iure placeat illo voluptatum accusamus dolorum ipsa. Optio culpa et quasi necessitatibus iusto amet nemo pariatur fugiat, dignissimos reprehenderit impedit modi laudantium odio explicabo temporibus iste aliquam quae fugit ipsa maiores aspernatur neque consectetur. Debitis corporis explicabo nam blanditiis, molestiae tempore tempora alias reprehenderit voluptatem autem deserunt perspiciatis ipsa doloremque rem aliquid non similique eaque laudantium pariatur, vitae dicta aliquam sit corrupti voluptatum! Beatae, omnis quia! Vero impedit dolores sed delectus ut atque alias qui quos ullam, placeat numquam fuga quaerat reprehenderit enim cupiditate dolorem iste dicta ducimus laudantium. Quia, rem. Voluptate dolorum sunt repellat itaque maiores. Eaque corporis nam, ipsam modi quaerat dolorem culpa incidunt. Maxime officiis consequuntur sapiente cumque explicabo alias ipsa dolorem reprehenderit fugiat necessitatibus quam amet libero doloremque, suscipit corporis veniam repellat maiores sit velit. Tenetur, eligendi sint officiis at facere tempora sed, ab veniam provident dolor repellat? Repudiandae eveniet itaque possimus sunt quis vel laudantium nesciunt tenetur dolorem optio nobis deleniti quo eos harum tempora quisquam quod earum amet, perspiciatis ex? Fugiat laborum aut libero aspernatur consequuntur? Est fugiat iste voluptatibus aliquid totam esse, nisi numquam. Deleniti, mollitia temporibus, placeat veritatis iste ipsa natus deserunt quo non alias sint tempora necessitatibus et labore sed eligendi magni consequuntur dignissimos a numquam. Voluptate amet placeat, modi iusto recusandae saepe fugiat quas dolores reprehenderit perspiciatis quidem quos quo pariatur ipsa voluptates maiores nisi porro repudiandae optio tempora obcaecati dolor? Dicta tempore nisi hic facere molestias et ipsum, nesciunt maxime. Voluptatum quis autem, rerum accusantium nisi praesentium ratione vitae explicabo eius accusamus harum optio expedita atque earum deserunt numquam. Quaerat ullam molestiae velit, sit ad aut repellat facilis laborum, quibusdam unde omnis dignissimos corporis incidunt possimus temporibus. Veniam minus qui culpa temporibus corporis voluptatum unde porro non, quos dicta odio, excepturi impedit? Similique dicta eius soluta. Rem quod unde suscipit corrupti. Perspiciatis, quo. Praesentium, maxime voluptatibus. Saepe, eaque explicabo pariatur dicta harum dignissimos debitis ducimus repellendus voluptatum rerum perferendis mollitia iusto vero quasi tenetur omnis deleniti! Esse sed dolorem optio cupiditate cumque eaque, iste porro dignissimos blanditiis veniam. Velit dicta reiciendis eum dolor, temporibus similique. Id quaerat officia officiis incidunt delectus quibusdam quisquam accusamus ex doloribus ut voluptatem, molestiae consectetur velit eligendi obcaecati excepturi, nulla in? Sunt, error sed? Sunt, eaque. Dicta fugit quisquam illo exercitationem corporis dolorum sequi architecto, asperiores voluptates.'
}

// Example Post Text
const textPost2 = () => {
  return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatem nesciunt, magnam adipisci ipsum veniam unde '
}

const posts = {
  post1: {
    id: 1,
    username: 'Setra Nugraha',
    userProfileImage: 'img/profile-default.jpg',
    datePost: '40 Menit',
    text: textPost1(),
    image: null,
    textComment: null,
    total_like: 2,
    total_comment: 10,
  },
  post2: {
    id: 2,
    username: 'Budi',
    userProfileImage: 'img/example-img2.png',
    datePost: '2 Jam',
    text: textPost2(),
    image: 'img/example-img2.png',
    textComment: 'aliquid totam esse, nisi numo',
    total_like: 21,
    total_comment: 100,
  },
  post3: {
    id: 3,
    username: 'Prakoso',
    userProfileImage: 'img/example-img2.png',
    datePost: '2 Menit',
    text: textPost2(),
    image: 'img/example-img.png',
    textComment: textPost1(),
    total_like: 11,
    total_comment: 40,
  },
}

export const ListPost = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const postsData = () => {
      return Object.values(posts)
    }

    const fetchedPost = postsData()

    setTimeout(() => {
      setData(fetchedPost)
      setIsLoading(false)
    }, 1500)
  }, [])

  return { data, isLoading }
}
