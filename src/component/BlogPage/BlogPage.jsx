import { Helmet } from "react-helmet";

const BlogPage = () => {
    return ( <>
    <Helmet>
        <meta name="description" content="Опис вашого вмісту"></meta>
        <title>Blog</title>
    </Helmet>
    <h1>Blog</h1>
    </> );
}
 
export default BlogPage;