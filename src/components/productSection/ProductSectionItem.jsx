import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
} from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductSectionItem = ({
    id,
    img,
    name,
    text,
    size,
    price,
    color,
    totalPrice,
}) => {
    const defaultSize = size[0];
    const defaultColor = color[0];
    const dispatch = useDispatch();
    return (
        <div>
            <Card className="w-96">
                <Typography variant="h4" className="absolute -rotate-45 top-12 right-8 z-10 text-red-700">
                    Sale%
                </Typography>
                <CardHeader floated={false} className="h-80">
                    <img src={img} alt={name} />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography color="gray" className="font-medium" textGradient>
                        {text}
                    </Typography>
                    <div className="flex justify-between items-center pt-4">
                        <Typography color="gray" className="font-medium" textGradient>
                            Size left: {defaultSize}
                        </Typography>
                        <Typography color="gray" className="font-medium" textGradient>
                            Color:{" "}
                            <span
                                className="px-2 rounded-full ml-2"
                                style={{ backgroundColor: defaultColor}}
                            ></span>
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Add to Cart" placement="bottom">
                        <Button
                            className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                            color="gray"
                            size="lg"
                            variant="outlined"
                            ripple={true}
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        id: id, 
                                        name: name,
                                        img: img,
                                        text: text,
                                        size: defaultSize,
                                        color: defaultColor,
                                        price: price,
                                        amount: 1,
                                        totalPrice: price,
                                    })
                                )
                            }
                        >
                            Add to Cart
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductSectionItem;
