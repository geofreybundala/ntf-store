import Header from "../components/header/header"
import notFound from './../assets/images/notFound.svg'

const NotFound = () => {
    return (
        <>
                <Header/>
            <div className="flex justify-center py-10 ">
                    <div className="">
                        <img src={notFound} />
                       <div className="p-2 text-3xl">
                       Oops! Page not found 
                       </div>
                    </div>
            </div>
        </>
    )
}

export default NotFound