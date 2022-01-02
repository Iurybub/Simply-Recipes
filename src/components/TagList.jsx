import React from 'react'
import setUpTags from "../utils/setUpTags";
import { Link, graphql } from "gatsby"
import slugify from 'slugify';

const TagList = ({ recipes }) => {
    const newTags = setUpTags(recipes)
    const tags = newTags.map((item, index) => {
        const [text, value] = item;
        const slug = slugify(text, { lower: true })
        return <Link to={`/tags/${slug}`} key={{ index }}>{text} ({value})</Link>
    })
    return (
        <div className="tag-container">
            <h4>Recipes</h4>
            <div className="tags-list">
                {tags}
            </div>
        </div>
    )
}

export default TagList
