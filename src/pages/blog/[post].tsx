import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export default function Post({ post }) {

  return (
  <div>
    <h1>Post</h1>

    <pre>{JSON.stringify(post, null, 2)}</pre>
  </div>
  )
}

export const getStaticPaths:GetStaticPaths<any> = async () => {
  const paths = [
    {
      params: {
        post: '1'
      }
    }
  ]

  return {
    paths,
    fallback:  'blocking'
  }
}

export const getStaticProps:GetStaticProps = async ({params}) => {

  return {
    props: {
      post: params.post
    }
  }
}