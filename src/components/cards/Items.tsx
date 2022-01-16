import Card from "./card"
import { NewIn } from "./utils/List"

const Items = (props: any) => {
    return (
        <div className="h-16  p-5 mx-4">
            <div className="text-3xl uppercase">
                {props.title}
            </div>

            <div className="flex p-1">
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