import Card from "./card"
import { NewIn } from "./utils/List"

const Items = (props: any) => {
    return (
        <div className="p-5 mx-4 my-2 h-72">
            <div className="py-3 text-3xl uppercase">
                {props.title}
            </div>

            <div className="flex p-1 overflow-x-scroll">
                {NewIn.map
                    (({image, old_price, new_price,title}, key) => (
                        <Card  image={image} old_price={old_price} new_price={new_price} title={title} key={key}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Items