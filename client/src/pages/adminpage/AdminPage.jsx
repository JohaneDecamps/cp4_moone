import ArticlesDelete from "../../components/articlesforms/ArticleDelete"
import ArticleAdd from "../../components/articlesforms/ArticlesAdd"
import CategoryAdd from "../../components/categoryform/CategoryAdd"

export default function AdminPage () {
    return (
        <> 
    <ArticleAdd/>
    <CategoryAdd/>
    <ArticlesDelete/>
    </>
    )
}