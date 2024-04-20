import { ABOUT_PAGE_CONTENT } from "../../../common/constants"
import { ADDITIONAL_RESOURCES_OBJ } from "../../../common/constants"
export default function About(){
    return (
        <div className="about-page-content">
        <p>{ABOUT_PAGE_CONTENT}</p>
        
        <div className="resources-links">
        <a href={ADDITIONAL_RESOURCES_OBJ.wiki}>wiki</a>
        <a href={ADDITIONAL_RESOURCES_OBJ.w3school}>w3school</a>
        </div>
        </div>
    )
}