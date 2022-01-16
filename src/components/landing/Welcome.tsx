import Carousel from 'framer-motion-carousel'
import {covers} from "./utils/List"

const Welcome = () =>{
    return (
        <Carousel autoPlay={false} interval={10} loop={true}>
            {covers.map
                ((cover, key) => (
                    <div
                        key={key}
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