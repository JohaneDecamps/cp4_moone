import ArticleAdd from "../../components/articlesforms/ArticlesAdd"
import CategoryAdd from "../../components/categoryform/CategoryAdd"
import ArticleDelete from "../../components/articlesforms/ArticleDelete"

export default function AdminPage () {
    return (
        <> 
    <ArticleAdd/>
    <CategoryAdd/>
    <ArticleDelete/>
    </>
    )
}