import React, { useState } from "react";
import { GridData } from "../data/Grid.js";
import { Images } from "../data/ImageSlider.js";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Divider } from "@mui/material";

function Display() {
	const [imageSlide, setImageSlide] = useState(0);

	const nextSlide = () => {
		setImageSlide(imageSlide === Images.length - 4 ? 0 : imageSlide + 1);
	};
	const prevSlide = () => {
		setImageSlide(imageSlide === 0 ? Images.length - 4 : imageSlide - 1);
	};

	return (
		<div>
			<div className="bottom-container">
				<div className="bottom-heading-container">
					<div className="bottom-heading">
						An element of truth | Science and engineering videos
					</div>
					<div className="bottom-description">
						Veritasium is a channel of science and engineering
						videos featuring experiments, expert interviews, cool
						demos, and discussions with the public about everything
						science.
					</div>
					<div className="bottom-grid">
						{GridData.map((item, index) => (
							<div key={index} className="grid-item">
								<a href={item.link}>
									<img
										src={item.src}
										alt={item.label}
										className="grid-image"
									/>
									<div className="grid-label">
										{item.label.toUpperCase()}
									</div>
									<div className="grid-date">{item.date}</div>
								</a>
							</div>
						))}
					</div>
					<div className="slider">
						<ArrowCircleLeftIcon
							className="arrow arrow-left"
							onClick={prevSlide}
						/>
						{Images.map((item, index) => {
							return (
								<div
									key={index}
									className={
										index >= imageSlide &&
										index <= imageSlide + 4
											? "image-slide"
											: "image-slide image-slide-hidden"
									}
								>
									<a href={item.link}>
										<img
											src={item.src}
											alt=""
											height="100%"
										></img>
									</a>
								</div>
							);
						})}
						<ArrowCircleRightIcon
							className="arrow arrow-right"
							onClick={nextSlide}
						/>
					</div>
					<div className="x-box">
						<div className="x-heading">
							<a
								href="https://twitter.com/veritasium?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Averitasium%7Ctwcon%5Es2"
								className="x-link"
							>
								Posts from @veritasium
							</a>
						</div>
						<Divider></Divider>
						<div className="x-post">
							<blockquote
								class="twitter-tweet"
								style={{ margin: "0px" }}
							>
								<p lang="en" dir="ltr">
									I tried railroad thermite welding!{" "}
									<a href="https://t.co/apstfwVgLG">
										pic.twitter.com/apstfwVgLG
									</a>
								</p>
								&mdash; Veritasium (@veritasium){" "}
								<a href="https://twitter.com/veritasium/status/1874876336352723018?ref_src=twsrc%5Etfw">
									January 2, 2025
								</a>
							</blockquote>{" "}
							<script
								async
								src="https://platform.twitter.com/widgets.js"
								charset="utf-8"
							></script>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Display;
