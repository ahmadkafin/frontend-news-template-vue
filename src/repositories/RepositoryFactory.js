import Categories from './CategoriesRepo'
import Artikel from './ArticleRepo';

const repositories = {
    'categories': Categories,
    'artikel': Artikel,
}
export default {
    get: name => repositories[name],
}