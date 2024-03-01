import "./ServicesArticle.scss";
const ServicesArticle = (props) => {
    return ( <article className="services__article" style={{backgroundImage: `url('${props.img}')`}}>
    <h1>{props.title}</h1>
</article> );
}
 
export default ServicesArticle;