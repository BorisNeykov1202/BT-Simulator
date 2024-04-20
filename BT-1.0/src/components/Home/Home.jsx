import { HOME_PAGE_CONTENT } from "../../../common/constants"
import Header from "../Header/Header"
export default function Home (){
 
    return (
        <>
        <Header/>
        <div className="index-page-content">
        <p>{HOME_PAGE_CONTENT}</p>
        </div>
        </>
    )
}