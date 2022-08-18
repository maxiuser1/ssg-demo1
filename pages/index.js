import Link from "next/link";
import supabase from "../utils/supabase";

const BlogList = ({ posts }) => {
  return  posts.map(post => (
    <p key={post.id}>
      <Link href={`/${post.id}`}>
        <a>{post.title}</a>
      </Link>
    </p>
  ))
};

export const getStaticProps = async () => {
  const { data: posts } = await supabase.from("posts").select("id, title");

  return {
    props: {
      posts,
    },
    revalidate: 86400,
  };
};

export default BlogList;
