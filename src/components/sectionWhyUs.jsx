import check from "../assets/icons/check.svg";
import tires from "../assets/images/tires.png"

const WhyUsFeature = (props) => {
    return (
        <>
            <div className="whyUsFeature">
                <img src={check}></img>
                <div>
                    <h2>{props.feature}</h2>
                    {props.text}
                </div>
            </div>
        </>
    )
}

export default function SectionWhyUs(props) {
    return (
        <>
            <div className="leftSide ">
                <WhyUsFeature feature="Expertise and Specialization" text="Benefit from our specialized knowledge in high-performance and 4x4 tyres. Our skilled team offers tailored advice and service." />
                <WhyUsFeature feature="Wide Range of Options" text="Discover diverse tyre options for various vehicles, including vans. We provide top-quality tyres to ensure the perfect fit." />
                <WhyUsFeature feature="Quality Assurance" text="Rest assured, every tyre undergoes rigorous quality checks for durability and performance. We stock only reputable brands known for exceptional quality." />
            </div>
            <div className="rightSide">
                <img src={tires}></img>
            </div>
        </>
    );
}