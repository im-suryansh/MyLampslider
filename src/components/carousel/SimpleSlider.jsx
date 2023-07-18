import React, { Component } from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";

function SimpleSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<div className="holder">
      <div className="cardandbtn">
			<div className="slider">
       
					<Slider {...settings}>
						<div className="card">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
								alt=""
								className="w-10"
							/>
						</div>
						<div className="card">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
								alt=""
								className="w-100"
							/>
						</div>
						<div className="card">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
								alt=""
								className="w-100"
							/>
						</div>
						<div className="card">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
								alt=""
								className="w-100"
							/>
						</div>
						<div className="card">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
								alt=""
								className="w-100"
							/>
						</div>
						<div className="card">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
								alt=""
								className="w-100"
							/>
						</div>
						<div className="card">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png"
								alt=""
								className="w-100"
							/>
						</div>
					</Slider>
				</div>
        <div className="btn">
				<button id="bottone1">
					<strong>Data Pipeline →</strong>
				</button>
        </div>
        </div>
		</div>
	);
}

export default SimpleSlider;
