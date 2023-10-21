import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

const BrandDetails = () => {
    const [detail, setDetail] = useState()
    const brands = useLoaderData();
    const { brandName, _id } = useParams();

    const matchingBrands = brands.filter((brand) => brand.brandName === brandName);
    useEffect(() => {
        const findDetail = matchingBrands?.find(detail => detail._id == _id)

        setDetail(findDetail)

    }, [_id, matchingBrands])

    return (
        <DetailCard detail={detail} ></DetailCard>
    )
}


export default BrandDetails;