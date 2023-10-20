const Brands = () => {
    return (
        <div className="flex p-5 gap-2">
            <div>
                <img
                    className="w-96 h-28"
                    src={`https://i.ibb.co/q9DZNwm/image.png`}
                    alt="Nike"
                />
                <p className="text-3xl">Nike</p>
            </div>
            <div>
                <img
                    className="w-96 h-28"
                    src={`https://i.ibb.co/qN251Pq/image.png`}
                    alt="Adidas"
                />
                <p className="text-3xl">Adidas</p> 
            </div>
            <div>
                <img
                    className="w-96 h-28"
                    src={`https://i.ibb.co/sQhhKfL/image.png`}
                    alt="Gucci"
                />
                <p className="text-3xl">Gucci</p> 
            </div>
            <div>
                <img
                    className="w-96 h-28"
                    src={`https://i.ibb.co/yRSK6Pj/image.png`}
                    alt="Zara" />
                <p className="text-3xl">Zara</p> 
            </div>
            <div>
                <img
                    className="w-96 h-28"
                    src={`https://i.ibb.co/mb7xPhS/image.png`}
                    alt="H&M"
                />
                <p className="text-3xl">H&M</p>
            </div>
            <div>
                <img
                    className="w-96 h-28"
                    src={`https://i.ibb.co/qsf7yZj/image.png`}
                    alt="Levi's" />
                <p className="text-3xl">Levi&#39;s</p>
            </div>
        </div>
    );
};

export default Brands;
