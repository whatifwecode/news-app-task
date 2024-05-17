import { Link } from 'react-router-dom';
import { NewsArticle } from '../../types.ts';

interface ArticleProps {
    article: NewsArticle;
}

const Article = ({ article }: ArticleProps) => {
    const { url, title, description, urlToImage } = article;

    return (
        <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block article-link hover:bg-gray-100 rounded p-4 relative"
        >
            <div className="flex space-x-4">
                {urlToImage && (
                    <img
                        src={urlToImage}
                        alt={title}
                        className="h-16 w-16 object-cover rounded"
                    />
                )}
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Article;
