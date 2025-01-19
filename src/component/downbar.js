import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Downbar() {
	return (
		<div className="endbar">
			<div className="social-box">
				<div className="socials">
					<a href="https://twitter.com/veritasium" className="sc">
						<TwitterIcon className="tw" fontSize="large" />
					</a>
					<a href="http://instagram.com/veritasium" className="sc">
						<InstagramIcon className="ig" fontSize="large" />
					</a>
					<a href="http://www.facebook.com/veritasium" className="sc">
						<FacebookIcon className="fb" fontSize="large" />
					</a>
					<a href="http://www.youtube.com/+veritasium" className="sc">
						<YouTubeIcon className="yt" fontSize="large" />
					</a>
				</div>
			</div>
			<div className="end-page">
				<div className="end-line">
					© 2024 Veritasium, Inc. “Veritasium” and “Ve” are trademarks
					of Veritasium, Inc. All rights reserved.
				</div>
			</div>
		</div>
	);
}

export default Downbar;
