import cover from "./../../assets/images/cover.jpg"
import Carousel from 'framer-motion-carousel'
import {covers} from "./utils/List"

const Welcome = () =>{
    return (
    //    <div className="h-72 bg-cover bg-center" style={{backgroundImage: `url(${cover})`}}>
    //       <div className=" relative h-72 " style={{width: `32rem`}}>
    //             <div className="absolute bottom-5 right-0 ">
    //                     <h1 className="uppercase font-light  text-4xl text-white">New COllection for this year check out, enyoy!</h1>
    //                     <h1 className="text-2xl font-ligh text-white">descriptions</h1>
    //             </div>
    //       </div>
    // </div>

        <Carousel autoPlay={false} interval={10} loop={true}>
            {covers.map
                ((cover, i) => (
                    <div
                        key={i}
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${cover.image})`,
                        }}
                        className="h-72 bg-cover bg-center"
                    >
                        <div className=" relative h-72 " style={{width: `32rem`}}></div>
                            <div className="absolute bottom-6 left-10">
                                <h1 className="uppercase font-light  text-4xl text-white">{cover.title}</h1>
                                <h1 className="text-medium font-light text-white">{cover.description}</h1>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    )
}

export default Welcome